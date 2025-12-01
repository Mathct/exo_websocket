# Les commandes principales de Socket.IO

## ✅ 1) io.on("connection", callback)
**Côté serveur**

Sert à détecter lorsqu'un client se connecte. callback reçoit l'objet socket, qui permet de communiquer avec ce client.


👉 Ça veut dire : "Quand quelqu'un se connecte, fais quelque chose."

## ✅ 2) socket.on("nomEvenement", callback)
**Côté client ou serveur**

Permet d'écouter un message. Si un événement avec ce nom est reçu, le callback est exécuté.

👉 Ça veut dire : "Quand je reçois cet événement, je réagis."

## ✅ 3) socket.emit("nomEvenement", data)
**Côté client ou serveur**

Envoie un message à un seul destinataire (le serveur ou un client précis). data est le contenu du message.

👉 Ça veut dire : "J'envoie cet événement avec des données."

## ✅ 4) io.emit("nomEvenement", data)
**Côté serveur**

Envoie un message à tous les clients connectés.

👉 Ça veut dire : "J'envoie un message à tout le monde."

## ✅ 5) socket.broadcast.emit("nomEvenement", data)
**Côté serveur**

Envoie un message à tout le monde sauf au client actuel.

👉 Ça veut dire : "J'envoie à tous… mais pas à moi."

## ✅ 6) io.to(socketId).emit("nomEvenement", data)
**Côté serveur**

Envoie un message à un client spécifique en utilisant son socketId.

👉 Ça veut dire : "J'envoie un message à un client précis identifié par son socketId."

## ✅ 7) socket.on("disconnect", callback)
**Côté serveur**

Sert à détecter lorsqu'un client se déconnecte. Le callback est exécuté quand le client se déconnecte.

👉 Ça veut dire : "Quand quelqu'un se déconnecte, fais quelque chose."

