import React from 'react'
import ImageHero from 'assets/images/img-hero.jpg'

import ImageHero_ from 'assets/images/img-hero.jpg'

//import IconCities from 'assets/images/icons/icon-cities.svg'

//import IconTraveler from 'assets/images/icons/icon-traveler.svg'
//import IconTreasure from 'assets/images/icons/icon-treasure.svg'
import Button from 'elements/Button'

export default function Hero(props) {
    function showMostPicked() {
        window.scrollTo() 
    }

    return (
        <section className="container pt-4">
            <div className="row align-items-center">
                <div className="col-auto pr-5" style={{ width: 422 }}>
                    <h1 className="h2 font-weight-bold line-height-1 mb-3">
                        Forget Busy Work, <br />
                        Start Next Vacation
                    </h1>

                    <a className="mb-5 font-weight-light text-gray-500 w-75">
                        we provide what you need to enjoy yout holiday with family, 
                        time to make another memorable moments.
                    </a>

                    <Button className="btn px-5 hassShadow isPrimary onClick={showMostPicked">
                        Show me now
                    </Button>
                    
                </div>
            </div>
        </section>
    )
}