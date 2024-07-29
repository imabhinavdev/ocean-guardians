import React from 'react'
import { motion } from "framer-motion"

const AwarenessCard = ({ title, desc }) => {
    return (
        <motion.div className="bg-[#faeee0] p-8 m-2 rounded-lg shadow-lg hover:shadow-xl  w-[45%]"
            whileHover={{ scale: 1.02 }}
        >
            <h3 className="font-semibold mb-2">{title}</h3>
            <p>{desc}</p>
        </motion.div>
    )
}

export default AwarenessCard