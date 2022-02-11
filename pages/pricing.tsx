import React from 'react'

type Props = {}

const Pricing = (props: Props) => {
  return (
    <div className="pricingPage">
        <h1><span id='spanGreen'>Resource</span> <span id='spanBlue'>Zen&apos;s</span> Pricing Plans</h1>
        <div className="pricingCards">
            <div className="lower">
                <div className="card">
                    <h2>First Plan</h2>
                    <h1>R100</h1>
                    <p>Per Month</p>
                    <br />
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident aut veritatis obcaecati ratione. Reprehenderit, alias rem enim laboriosam modi voluptatum voluptatibus voluptatem provident magnam repellendus! Aliquid a error et incidunt!</p>
                    <button>Purchase</button>
                </div>
                <div className="card">
                    <h2>First Plan</h2>
                    <h1>R100</h1>
                    <p>Per Month</p>
                    <br />
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident aut veritatis obcaecati ratione. Reprehenderit, alias rem enim laboriosam modi voluptatum voluptatibus voluptatem provident magnam repellendus! Aliquid a error et incidunt!</p>
                    <button>Purchase</button>
                </div>
            </div>
            <div className="upper">
            <div className="card">
                    <h2>First Plan</h2>
                    <h1>R100</h1>
                    <p>Per Month</p>
                    <br />
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident aut veritatis obcaecati ratione. Reprehenderit, alias rem enim laboriosam modi voluptatum voluptatibus voluptatem provident magnam repellendus! Aliquid a error et incidunt!</p>
                    <button>Purchase</button>
                </div>
            </div>
        </div>
    </div>
  )
}
export default Pricing