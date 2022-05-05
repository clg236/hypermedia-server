const livekitApi = require('livekit-server-sdk');
const AccessToken = livekitApi.AccessToken;
const RoomServiceClient = livekitApi.RoomServiceClient;
const uuid = require('uuid')
const express = require('express')
const app = express()
const port = 3001

app.get('/', (req, res) => {
    res.send(generateToken('testRoom', 'christian'))
  })

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })

const generateToken = (room, name) => {
    const roomName = room
    const participantIdentity = uuid.v4();
    const participantName = name

    const at = new AccessToken('APIThrw4AiRVf8u', 'jtLxYP9HPyywBq8G514oARrkgPhMUPyMaEcmb2fRbKA', {
    identity: participantIdentity,
    name: participantName,
    });

    at.addGrant({ roomJoin: true, room: roomName, canPublish: true, canSubscribe: true });

    const token = at.toJwt();
    return token;
}

