import http from "http"

const url = process.argv[2]

http.get(url, res => {
  res.setEncoding("utf8")
  let allData: string = ""
  res.on("data", data => allData += data)
  res.on("end", () => {
    console.log(allData.length)
    console.log(allData)
  })
})