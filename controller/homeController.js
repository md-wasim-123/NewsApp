const axios = require('axios')
const api = async (req, res) => {
    let url = "https://newsapi.org/v2/top-headlines?q=all&apiKey=63712aa102484cb79aac60a7c0309c9a&country=in"
    let r = await axios.get(url)
    res.render('index', { articals: r.data.articles })
}

const apisearch = async (req, res) => {
    const query = req.body.cityname
    console.log(query);
    try {
        let url = `https://newsapi.org/v2/top-headlines?q=${query}&apiKey=63712aa102484cb79aac60a7c0309c9a`
        let r = await axios.get(url)
        res.render('index', { articals: r.data.articles })
    } catch (error) {
        console.log(error + "error message")
    }
}







module.exports = {
    api, apisearch
}