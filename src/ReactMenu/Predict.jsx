import React from 'react'
import Card from './Card'
import CardData from './CardData'

const Predict = () => {
    return (
        <>
        <div className = "my-5">
            <h1 className = "text-center">
                Predict your Disease
            </h1>
        </div>
        <div className = "container-fluid mb-5">
            <div className = 'row'>
                <div className = "col-10 mx-auto">
                    <div className = 'row gy-4'>
                       {
                           CardData.map((val, ind)=>{
                              return <Card
                                key={ind}
                                imgsrc = {val.imgsrc}
                                title = {val.title}
                                linktopredict = {val.linktopredict}
                              />
                           })
                       }
                    </div>
                </div>
            </div>
        </div>

        </>
    )
}

export default Predict
