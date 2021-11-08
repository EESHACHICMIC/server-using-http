const http = require('http')
const port = 5000;
const student = require('./student')
const emp = require('./emp')


http.createServer(async function (req, res) {
    if (req.method === 'GET' && req.url === '/student') {
        res.setHeader('content-type', 'application/json')
        res.writeHead(200)
        // res.write('<h1>Hello World</h1>')
        res.end(JSON.stringify(student));
    }

    else if (req.method === 'POST') {
        var body = "";
        await req.on('data', (data) => {
            data = data.toString();
            body = body + data;

        });

        let bod = JSON.parse(body)
        let stu = {
            id: student.length + 1,
            first_name: bod.first_name,
            last_name: bod.last_name,
            email: bod.email
        }
        student.push(stu);
        req.on('end', () => {

            res.writeHead(200, { 'Content-Type': 'application/json' });

            res.write(JSON.stringify(stu), () => {

                res.end();

            });

        });

    }
    else if (req.method === 'PUT') {
        let id = parseInt(req.url.slice(1));
        console.log("Id:", id);
        let bodys = "";
        await req.on('data', (data) => {
            data = data.toString();
            bodys += data;
        })

        body = JSON.parse(bodys)
        let first_name = body.first_name
        let gender = body.gender
        let status = body.status
        let index = users.findIndex((user) => {
            return
        })

    }
    else {
        res.writeHead(404, { 'Content-Type': 'text/json' });

        res.end("404 ERROR could not find that Page");
    }
}).listen(port, () => { console.log(`server is running at port ${port}`) })