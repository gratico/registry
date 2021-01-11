import { spawn } from 'child_process'

export async function spawnChild(cmd, args, opts) {
  const child = spawn(cmd, args, opts)

  let data = ''
  for await (const chunk of child.stdout) {
    console.log('stdout chunk: ' + chunk)
    data += chunk
  }
  let error = ''
  for await (const chunk of child.stderr) {
    console.error('stderr chunk: ' + chunk)
    error += chunk
  }
  const exitCode = await new Promise((resolve, reject) => {
    child.on('close', resolve)
  })

  if (exitCode) {
    throw new Error(`subprocess error exit ${exitCode}, ${error}`)
  }
  return data
}
