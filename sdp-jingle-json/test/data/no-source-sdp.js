module.exports = [
    "v=0",
    "o=- 1382398245712 1385147470924 IN IP4 0.0.0.0",
    "s=-",
    "t=0 0",
    "m=audio 1 UDP/TLS/RTP/SAVPF 96 101",
    "c=IN IP4 0.0.0.0",
    "a=rtcp:1 IN IP4 0.0.0.0",
    "a=ice-ufrag:GXUH9ptTQlZT2f1l",
    "a=ice-pwd:6AWVYDmAkCyeBQeG75QCC6TE",
    "a=fingerprint:sha-256 A1:D1:E8:C0:A3:B2:66:AA:8E:40:46:F0:4F:FE:FB:B9:99:82:E3:D9:6B:C9:F4:11:64:5E:AD:54:99:2C:E3:03",
    "a=setup:actpass",
    "a=sendrecv",
    "a=mid:audio",
    "a=rtpmap:96 opus/48000/2",
    "a=rtpmap:101 telephone-event/48000",
    "a=fmtp:101 bitrate=0",
    "a=candidate:1 1 UDP 0 xx.xx.xxx.xxx 27622 typ host generation 0",
    "a=candidate:1974206464 1 UDP 1694498815 xxx.xx.xxx.xxx 27622 typ srflx raddr xx.xx.xxx.xxx rport 27622 generation 0",
    "" // So we end with a \r\n
].join('\r\n');