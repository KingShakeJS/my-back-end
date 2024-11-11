const app = express()
const port =process.env.PORT || 3003
const jsonBodyMiddleware = express.json()
app.use(jsonBodyMiddleware)

app.get('/', (req: Request, res: Response) => {
    res.send('ddd')
})