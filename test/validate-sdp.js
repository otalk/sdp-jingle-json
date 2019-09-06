var matchOverrides = [
    { output: /o=- \d+ \d+ IN IP4 0.0.0.0/, original: /o=- \d+ \d+ IN IP4 127.0.0.1/ },
    { output: /a=msid-semantic: WMS \*/, original: /a=msid-semantic: WMS .+/ },
    { output: /a=extmap:1\/sendrecv urn:ietf:params:rtp-hdrext:ssrc-audio-level/, original: /a=extmap:1 urn:ietf:params:rtp-hdrext:ssrc-audio-level/ },
    { output: /a=extmap:2\/sendrecv http:\/\/www.ietf.org\/id\/draft-holmer-rmcat-transport-wide-cc-extensions-01/, original: /a=extmap:2 http:\/\/www.ietf.org\/id\/draft-holmer-rmcat-transport-wide-cc-extensions-01/ },
    { output: /a=extmap:3\/sendrecv urn:ietf:params:rtp-hdrext:sdes:mid/, original: /a=extmap:3 urn:ietf:params:rtp-hdrext:sdes:mid/ },
    { output: /a=extmap:4\/sendrecv urn:ietf:params:rtp-hdrext:sdes:rtp-stream-id/, original: /a=extmap:4 urn:ietf:params:rtp-hdrext:sdes:rtp-stream-id/ },
    { output: /a=extmap:5\/sendrecv urn:ietf:params:rtp-hdrext:sdes:repaired-rtp-stream-id/, original: /a=extmap:5 urn:ietf:params:rtp-hdrext:sdes:repaired-rtp-stream-id/ },
    { output: /a=extmap:6\/sendrecv http:\/\/www.webrtc.org\/experiments\/rtp-hdrext\/video-content-type/, original: /a=extmap:6 http:\/\/www.webrtc.org\/experiments\/rtp-hdrext\/video-content-type/ },
    { output: /a=extmap:7\/sendrecv http:\/\/www.webrtc.org\/experiments\/rtp-hdrext\/video-timing/, original: /a=extmap:7 http:\/\/www.webrtc.org\/experiments\/rtp-hdrext\/video-timing/ },
    { output: /a=extmap:8\/sendrecv http:\/\/tools.ietf.org\/html\/draft-ietf-avtext-framemarking-07/, original: /a=extmap:8 http:\/\/tools.ietf.org\/html\/draft-ietf-avtext-framemarking-07/ },
    { output: /a=extmap:9\/sendrecv http:\/\/www.webrtc.org\/experiments\/rtp-hdrext\/color-space/, original: /a=extmap:9 http:\/\/www.webrtc.org\/experiments\/rtp-hdrext\/color-space/ },
    { output: /a=extmap:11\/sendrecv http:\/\/www.webrtc.org\/experiments\/rtp-hdrext\/playout-delay/, original: /a=extmap:11 http:\/\/www.webrtc.org\/experiments\/rtp-hdrext\/playout-delay/ },
    { output: /a=extmap:12\/sendrecv urn:3gpp:video-orientation/, original: /a=extmap:12 urn:3gpp:video-orientation/ },
    { output: /a=extmap:13\/sendrecv http:\/\/www.webrtc.org\/experiments\/rtp-hdrext\/abs-send-time/, original: /a=extmap:13 http:\/\/www.webrtc.org\/experiments\/rtp-hdrext\/abs-send-time/ },
    { output: /a=extmap:14\/sendrecv urn:ietf:params:rtp-hdrext:toffset/, original: /a=extmap:14 urn:ietf:params:rtp-hdrext:toffset/ },
];

function outputMissingLines(outputLines, originalLines) {
    originalLines.forEach(function (line) {
        var lineIsInOutput = outputLines.find(function (outputLine) {
            return outputLine === line;
        });

        if (!lineIsInOutput) {
            var matchedOverride = matchOverrides.find(function (override) {
                return line.match(override.original);
            });

            // found override in the outputSdp, make sure it matches the original
            if (matchedOverride) {
                var matchedOutputLine = outputLines.find(function (outputLine) {
                    return outputLine.match(matchedOverride.output);
                });

                if (matchedOutputLine) {
                    return;
                }
            }

            console.log('"' + line + '" from originalSdp section: "' + originalLines[0] + '" cannot be found in the corresponding outputSdp');
        }
    });
}

function validateSection(t, outputSection, originalSection) {
    var outputLines = outputSection.split('\r\n');
    var originalLines = originalSection.split('\r\n');

    t.strictEqual(outputLines.length, originalLines.length);
    if (originalLines.length > outputLines.length) {
        outputMissingLines(outputLines, originalLines);
    }

    outputLines.forEach(function (line) {
        if (!line) {
            return;
        }

        var lineIsInOriginal = originalLines.find(function (originalLine) {
            return originalLine === line;
        });

        if (!lineIsInOriginal) {
            var matchedOverride = matchOverrides.find(function (override) {
                return line.match(override.output);
            });

            // found override in the outputSdp, make sure it matches the original
            if (matchedOverride) {
                var matchedOriginalLine = originalLines.find(function (originalLine) {
                    return originalLine.match(matchedOverride.original);
                });

                if (matchedOriginalLine) {
                    return;
                }
            }

            console.log(line);
            originalLines;
            t.fail('outputSdp line: "' + line + '" in section: "' + outputLines[0] + '" could not be found in the corresponding originalSdp section');
        }
    });
}

// since we mangle the sdp slightly, the output sdp will be slightly different than the original input.
// this function validates the sdp and makes sure the only lines that are different are the ones we expect.
// this is especially valid since we dont guarantee ordering of certain lines of the output sdp from the json.
module.exports = function validateSdp(t, outputSdp, originalSdp) {
    var outputSections = outputSdp.split(/\r?\nm=/);
    var originalSections = originalSdp.split(/\r?\nm=/);

    t.equal(outputSections.length, originalSections.length);

    for (var i = 0; i < outputSections.length; i++) {
        validateSection(t, outputSections[i], originalSections[i]);
    }
};
