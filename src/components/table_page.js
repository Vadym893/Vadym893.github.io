import React,{useState,useEffect} from "react";
import Header from "./header";
import Table from "./table";
import { useTranslation } from 'react-i18next'
export default function TablePages(){
    const [currentRegion,setCurrentRegion]=useState("eu")
    const [rows,setRows]=useState([]);
    const {t}=useTranslation()

    useEffect(()=>{
        if (currentRegion==="eu"){
            fetch("https://my.api.mockaroo.com/leaderboard.json?key=81b9afa0").then(data =>data.json()).then(json=>{
                setRows(json)
            }).catch(err => {console.log(err)})
        }
        else if (currentRegion==="america"){
            fetch("https://my.api.mockaroo.com/leaderboard_americas.json?key=81b9afa0").then(data=>data.json()).then(json=>{
                setRows(json)
            }).catch(err => {console.log(err)})
        }
        else if (currentRegion==="asia"){
            fetch("https://my.api.mockaroo.com/leaderboard_asia.json?key=81b9afa0").then(data=>data.json()).then(json=>{
                setRows(json)
            }).catch(err => {console.log(err)})
        }
    },[currentRegion])

    return(
        <>
        <Header/>
        <main className="main">
            
            <div className="table-head">
                <div className="content">
                    <img id="globe" src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/leaderboards/globe.png" width="339" height="339" border="0"/>
                    <p className="main-header">{t("World Leaderboards")}</p>
                    <div className="main-button-wrapper">   
                        <a 
                            className=" link"  onClick={()=>{
                            setCurrentRegion("america");
                        }}>
                            {t("America")}
                        </a>
                        <a
                            className=" link"  onClick={()=>{
                            setCurrentRegion("eu");
                        }}>
                            {t("Europe")}
                        </a>
                        <a 
                            className="link"  onClick={()=>{
                            setCurrentRegion("asia");
                        }}>
                            {t("Asia")}
                        </a>
                    </div>
                    <Table data={rows}/>
                </div>
            </div>
            <div className="table_body"></div>
        </main>
    </>
    )
}