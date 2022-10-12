import http from 'http'
import app from '../app'
import setting from '../setting'

const server = http.createServer(app)

const normalizePort = (val: string) => {
  const port = parseInt(val, 10)

  if (isNaN(port)) {
    // named pipe
    return val
  }

  if (port >= 0) {
    // port number
    return port
  }

  return false
}

const onError = (error: any) => {
  if (error.syscall !== 'listen') {
    throw error
  }

  const bind = typeof port === 'string' ? 'Pipe ' + port : 'Port ' + port

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES': 
      console.error(bind + ' requires elevated privileges')
      process.exit(1)
      break
    case 'EADDRINUSE':
      console.error(bind + ' is already in use')
      process.exit(1)
      break
    default:
      throw error
  }
}

const port = normalizePort(setting.PORT || '3000')

app.set('port', port)

server.listen(port, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${port}`)
})
server.on('error', onError)
