import React from 'react'
import Head from 'next/head'
type Props = {}

const Roadmap = (props: Props) => {
  return (
    <div className="roadmapPage">
        <Head>
          <title key="title">Roadmap</title>
        </Head>
        <h1><span id='spanGreen'>Resource</span> <span id='spanBlue'>Zen&apos;s</span> roadmap</h1>
        <div className="roadmapGraphic">
            <h2>No idea how to do this ask boss man Morgan</h2>
        </div>
        <div className="featureSuggestion">
            <form action="">
                <h1>Do you have a feature in mind for <span id='spanGreen'>Resource</span> <span id='spanBlue'>Zen</span></h1>
                <div className="inputGrid">
                    <div className="inputItem">
                        <label htmlFor="title">Title</label>
                        <input type="text" />
                    </div>
                    <div className="inputItem">
                        <label htmlFor="email">Email</label>
                        <input type="text" />
                    </div>
                    <div className="inputItem">
                        <label htmlFor="suggestion">Your Suggestion</label>
                        <input type="text" />
                    </div>
                </div>
                <button>Submit</button>
            </form>
        </div>
        <div className="featureBrowse">
            <h2>Or browse and <span id='spanGreen'>vote</span> for an existing one below </h2>
            <div className="suggestionGrid">
                <div className="suggestionItem">
                    <h1>Suggestion Title</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos repellat fugiat, dolorum sunt iure sequi error sit? Rem omnis quisquam, alias suscipit sed libero totam quis quae sequi earum ratione.</p>
                    <div className="details">
                        <p>Pending</p>
                        <div className="voteDetails">
                            <p>1 Vote</p>
                            <button>Vote</button>
                        </div>
                    </div>
                </div>
            </div> 
        </div>
    </div>
  )
}

export default Roadmap