import axios from 'axios'
import React, { useEffect } from 'react'

const Tournaments = ({ data }) => {
console.log(data)
    return (
        <div>

        </div>
    )
}

export default Tournaments
export async function getServerSideProps() {
    let allTournaments
        allTournaments = await axios.post("http://localhost:5000/getAllTournaments")
    return {
        props: { data: allTournaments.data  }
    }
}