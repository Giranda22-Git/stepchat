const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const multer = require('multer')
const fs = require('fs')
const path = require('path')

const corsOptions = {
  origin: 'http://localhost:8080',
  optionsSuccessStatus: 200
}
app.use(cors(corsOptions))
app.use(bodyParser.json())
app.use(express.static(__dirname));
app.use(multer({dest:"uploads"}).single("file"));

const messages = []
const users = []
const files = []


app.post("/upload", function (req, res, next) {
  let filedata = req.file
  console.log(filedata)
  
  if(!filedata || filedata.size >= 30 * 1000 * 1000 || filedata.mimetype === 'application/x-msdownload'){
    res.status(500).send("Ошибка при загрузке файла")
  }
  else{
    fs.rename(filedata.path, `uploads/${filedata.originalname}`, err => {
      if (err) res.status(500).send("ошибка при присвоении имени файлу")
    })
    files.push({
      name: filedata.originalname,
      path: path.join(__dirname, '/uploads/', filedata.originalname),
      size: filedata.size,
      owner: req.body.owner
    })
    res.status(200).send("Файл загружен")
  }
  next()
});

app.get('/', (req, res) => res.status(200).json({
  users: users,
  messages: messages,
  files: files
}))

app.post('/message', (req, res) => {
  const message = req.body
  
  if (!message.name || !message.text) {
    res.sendStatus(500)
  } else {
    messages.push({ name: message.name, text: message.text })
    res.sendStatus(200)
  }
})

app.post('/user', (req, res) => {
  const user = req.body

  if (!user.name) {
    res.sendStatus(500)
  } else {
    users.push(user.name)
    res.sendStatus(200)
  }
})
app.delete('/user/:name', (req, res) => {
  const user = req.params.name

  if (users.includes(user)) {
    users.splice(users.indexOf(user), 1)
    res.sendStatus(200)
  } else {
    res.sendStatus(404)
  }
})

app.listen(3000)