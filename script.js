/* Fun Fact Section*/
const randomFacts = [
    'One light year is a length spanning 5 trillion, 903 billion, 26 million, 326 thousand, and 255 miles',
    'There is an area around a black hole called the Photon Sphere where light can orbit a black hole. This means that, if you were to stand in that area, you could theoretically see the back of your own head',
    'Light tends to act like a wave, unless we try to directly observe it, then it behaves more like a particle instead',
    'There are more stars in the sky than grains of sand on the Earth',
    'Some butterflys have nano-scale baffle structures in their wings that allow them to trap specific wavelengths of light, giving them their unique and vibrant colors'
];

const getFunFact = (randFacts) => {
    let funFact = randFacts[Math.floor(Math.random()*randFacts.length)];
    return funFact
}

document.getElementById("fact").innerHTML = getFunFact(randomFacts);
/*-----------*/

/* Replace Stylesheet Section */
const selectDesc = {
    default: {
        style: 'default',
        description: 'My original styling. This is what I came up with without any styling guidelines or restraints'
    },
    default_light: {
        style: 'default-lt',
        description: 'My original styling but in a light theme rather than a dark theme. Only the colors have changed'
    },
    Minimal_Apple: {
        style: 'minimal',
        description: "This style is very modern and minimalist, inspired by Apple's web design"
    },
    Round_Google: {
        style: 'rounded',
        description: "This style is fun and has lots of rounded edges, similar to Google's web design"
    }
};

let styleChoice = document.getElementById("style").value;
const changeStyle = () => {
    styleChoice = document.getElementById("style").value;
}

document.getElementById("style").addEventListener('change', styleChoice())
/*----------*/