let url = "https://catfact.ninja/fact";

 async function getfact() {
    try {
        let res= await axios.get(url)
        return res.data.fact;
    }
    catch {
        console.log("error -", e)
        return "result not found"
    }
 }