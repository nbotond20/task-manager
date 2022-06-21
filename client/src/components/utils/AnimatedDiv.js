import { motion } from 'framer-motion';

const AnimatedDiv = ({ children }) => {
    const initial = { opacity: 0 };

    const animate = {
        /* scale: [0.9, 1, 0.95, 1],
        skew: [0.5, -0.5, 0.5, -0.5, 0], */
        opacity: 1,
        transition: {
            ease: 'easeInOut',
            delay: 0.3
        }
    };

    const exit = {
        opacity: 0,
        transition: {
            duration: 0.2
        }
    };

    return (
        <motion.div initial={initial} animate={animate} exit={exit}>
            {children}
        </motion.div>
    );
};

export default AnimatedDiv;
