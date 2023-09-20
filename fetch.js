const fetchApi = async (url) => {
    const response = await fetch(url)
    if (response.status === 404 ){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
        document.querySelector(".graphic").style.display = "none";
    } else{
        const data = await response.json()
        return data
    }
    const data = await response.json()
        return data
    }                                                                                   
const fetchApiGrafico = async (url)=> {
        const responseGrafico= await fetch(url);
        const dataGrafico = responseGrafico.json();
        return dataGrafico;
    }

export{fetchApi, fetchApiGrafico}