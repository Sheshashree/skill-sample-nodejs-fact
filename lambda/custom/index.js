/* eslint-disable  func-names */
/* eslint-disable  no-console */

const Alexa = require('ask-sdk-core');
const cookbook = require('./alexa-cookbook.js');

//=========================================================================================================================================
//TODO: The items below this comment need your attention.
//=========================================================================================================================================

const SKILL_NAME = 'Math Facts';
const GET_FACT_MESSAGE = 'Here\'s your fact: ';
const HELP_MESSAGE = 'You can say tell me a mathematics fact, or, you can say exit... What can I help you with?';
const HELP_REPROMPT = 'What can I help you with?';
const FALLBACK_MESSAGE = 'The Mathematics Facts skill can\'t help you with that.  It can help you discover facts about mathematics if you say tell me a math fact. What can I help you with?';
const FALLBACK_REPROMPT = 'What can I help you with?';
const STOP_MESSAGE = 'Goodbye!';

//=========================================================================================================================================
//TODO: Replace this data with your own.  You can find translations of this data at http://github.com/alexa/skill-sample-nodejs-fact/tree/en-US/lambda/data
//=========================================================================================================================================

const data = [
  'If you write out pi to two decimal places, backwards it spells "pie".',
'A French word for pie chart is "camembert".',
'The spiral shapes of sunflowers follow a Fibonacci sequence.',
'The word hundred is derived from the word "hundrath", which actually means 120 and not 100.',
'In a room of just 23 people there"s a 50% chance that two people have the same birthday.',
'Zero is the only number that cant be represented in Roman numerals.',
'The most popular favourite number is 7.',
'The number 4 is considered unlucky in much of Asia.',
'Cicadas use prime numbers as an evolutionary strategy.',
'It is believed that Ancient Egyptians used complex mathematics such as algebra, arithmetic and geometry as far back as 3000 BC, such as equations to approximate the area of circles.',
'Babylonians measured the circumference of a circle as approximately 3 times the diameter, which is fairly close to today"s measurement which uses the value of Pi (around 3.14).',
'Chinese mathematics developed around the 11th century BC and included important concepts related to negative numbers, decimals, algebra and geometry.',
'Greek mathematics developed from around the 7th century BC, producing many important theories thanks to great mathematicians such as Pythagoras, Euclid and Archimedes.',
'The Hindu-Arabic numeral system began developing as early as the 1st century with a full system being established around the 9th century, forming the basis of the numerical digits 0, 1, 2, 3, 4, 5, 6, 7, 8 and 9 that we use today.',
'The symbols used for addition (+) and subtraction (-) have been around for thousands of years but it wasn"t until the 16th century that most mathematical symbols were invented. Before this time math equations were written in words, making it very time consuming.',
'The equals sign (=) was invented in 1557 by a Welsh mathematician named Robert Recorde.',
'Mathematical developments increased rapidly around the time of the Italian Renaissance in the 16th century and continued through the scientific revolution of the 17th and 18th centuries, becoming increasingly abstract in the 19th and 20th centuries.',
'The basic arithmetic operations used in mathematics are addition, subtraction, multiplication and division.',
'Greek philosopher and mathematician Pythagoras lived around the year 500 BC and is known for his Pythagorean theorem relating to the three sides of a right angle triangle: a² + b² = c².',
'Greek mathematician Euclid is often referred to as the "Father of Geometry" for his revolutionary ideas and influential textbook called "Elements" that he wrote around the year 300 BC.',
'The numerical digits we use today such as 1, 2 and 3 are based on the Hindu-Arabic numeral system developed over 1000 years ago.',
'Different names for the number 0 include zero, nought, naught, nil, zilch and zip.',
'2 and 5 are the only prime numbers that end with a 2 or a 5.',
'The golden ratio of approximately 1.618 between two quantities such as lengths often appears in nature (tree branching, uncurling ferns, pine cone arrangements etc) and has been used throughout history to create aesthetically pleasing designs and art works such as Leonardo da Vinci"s Mona Lisa.',
'Fibonacci numbers are named after Italian mathematician Leonardo of Pisa (better known as Fibonacci) who introduced them to Western Europe after they had earlier been described by Indian mathematicians. They are related to the golden ratio.',
'The number Pi (the ratio of the circumference to the diameter of a circle) can"t be expressed as a fraction, making it an irrational number. It never repeats and never ends when written as a decimal.',
'What comes after a million, billion and trillion? A quadrillion, quintillion, sextillion, septillion, octillion, nonillion, decillion and undecillion.',
'The name of the popular search engine "Google" came from a misspelling of the word "googol", which is a very large number (the number one followed by one hundred zeros to be exact).',
'A "googolplex" is the number 1 followed by a googol zeros, a number so ridiculously big that it can"t be written because there literally isn"t enough room in the entire universe to fit it in!',
'You might have heard the word "infinity" before or seen its symbol that looks like the number 8 placed on its side. Infinity means a limitless quantity or something that goes on forever. While it"s not really a number like 1, 2 or 3, infinity is often used in math as part of equations and formulas.',
'Archimedes of Syracuse lived around the year 250 BC and among other things, developed a method for determining the volume of objects with irregular shapes.',
'Italian mathematician Leonardo of Pisa (better known as Fibonacci) lived between the years 1170 and 1250 and is best known today for Fibonacci numbers, the number sequence named after him. Fibonacci introduced the number sequence to Western Europe in his book "Liber Abaci" after they had been described earlier by Indian mathematicians.',
'In the 17th century Galileo Galilei and Johannes Kepler made important discoveries relating to planetary motion and orbits.',
'German mathematician Gottfried Leibniz lived between 1646 and 1716, developing important calculus concepts and mathematical notation practices.',
'Isaac Newton discovered the laws of physics and brought together many important concepts of infinitesimal calculus.',
'Much of the work done by Leibniz and Newton is based on theories by French philosopher Rene Descartes. As well as his many contributions to philosophy, Descartes also had a huge impact on mathematics, creating analytical geometry, developing a system that describes geometry using algebra, contributing to optics and much more.',
'Born in France, Pierre de Fermat was an amateur mathematician who is best known for Fermat"s Last Theorem.',
'In 1642 French mathematician Blaise Pascal invented the mechanical calculator.',
'Swiss mathematician Leonhard Euler was probably the most influential mathematician of the 18th century, making discoveries in graph theory and introducing many modern mathematical words and notations among other things.',
'Born in 1777, German mathematician Carl Friedrich Gauss contributed brilliant work in geometry, statistics, number theories, algebra and much more.',
'Bernhard Riemann was an influential German mathematician who contributed to differential geometry and analysis, paving the way for the development of general relativity by Albert Einstein.',
'Born in 1882, Emmy Noether was a German mathematician who made important contributions to abstract algebra and theoretical physics, described by Einstein as the most important woman in the history of mathematics.',
'Alan Turing was a British mathematician and computer scientist who cracked German ciphers (codes) in the Second World War, contributed to mathematical logic and played an important role in the development of algorithms, artificial intelligence and the modern computer.',
'Born in 1953, British mathematician Andrew Wiles is most famous for proving Fermat"s Last Theorem.',
'Greeks constructed aesthetically pleasing buildings and artworks based on the golden ratio of approximately 1.618.',
'The compass and straight edge were powerful tools in the advancement of geometry, allowing the construction of various lengths, angles and geometric shapes.',
'Modern day geometry has made developments in a number of areas, including those that make use of the raw computing power of today"s computers.',
'The word "geometry" comes from the Greek words "geo", meaning earth, and "metria", meaning measure.',
'Along with arithmetic, geometry was one of the two fields of pre-modern mathematics.',
'Sometimes a sphere is given a north and south pole (found on opposite sides of the surface).',
'An equator is a circle that is the same distance from the north and south poles.',
'A sphere can be divided into two equal hemispheres by a flat two dimensional surface (plane) that passes through the center.',
'The words north pole, south pole, equator and hemispheres are often used when talking about planet Earth even though it isn"t really a sphere, it"s more like a flattened sphere (oblate spheroid).',
'All points on the surface of a sphere are the same distance from the center.',
'A sphere is perfectly symmetrical around its center.',
'The distance from the center of a sphere to its surface is called the radius.',
'The maximum distance through the sphere is called the diameter, it is twice the size of the radius.',
'Trigonometry is the study of the relationship between the angles of triangles and their sides.',
'An equilateral triangle has three sides of equal length and three equal angles.',
'The three internal angles of a triangle always add to 180 degrees.',
'An equilateral triangle has three sides of equal length and three equal angles.',
'An isosceles triangle has two sides of equal length and two equal angles.',
'A scalene triangle has no sides of equal length and no equal angles.',
'A right angle triangle has one angle that is 90 degrees.',
'An obtuse triangle has one angle larger than 90 degrees.',
'An acute triangle has angles that are all less than 90 degrees.',
'The longest side of a right angle triangle is called the hypotenuse, it is always found opposite the right angle.',
'A square is also a rectangle with equal sides and a rhombus with right angles.',
'The area of a square is equal to the length of one side to the power of two (length squared).',
'The perimeter of a square is 4 times the length of one side.',
'A square has a larger area than all other quadrilaterals with the same perimeter.',
'The diagonals of a square bisect each other at 90 degrees and are perpendicular.',
'Opposite sides of a square are parallel.',
'The internal angles of a square add to 360 degrees.',
'The word "quadrilateral" comes from "quad" meaning "4" and "lateral" meaning "of sides".',
'The interior angles of quadrilaterals add to 360 degrees.',
'Quadrilaterals with 2 sets of parallel side are called parallelograms.',
'A rhombus is a quadrilateral with four sides of the same length. A diamond shape is a good example of a rhombus.',
'A convex (outward) quadrilateral with one pair of parallel sides is known as a trapezoid in the US and a trapezium in other parts of the world. In both instances it comes from a Greek word meaning "a little table".',
'A kite quadrilateral features 2 pairs of adjacent sides that are of equal length (much like a kite you can fly in the sky).',
'FOUR" is the only number in the English language that is spelt with the same number of letters as the number itself.',
'From 0 to 1,000, the letter "A" only appears in 1,000 ("one thousand")',
'Have you ever noticed that the opposite sides a die always add up to seven (7)',
'Abacus is considered the origin of the calculator',
'A "jiffy" is an actual unit of time for 1/100th of a second.',
'Have you heard about a Palindrome Number? It is a number that reads the same backwards and forward, e.g. 12421.',
'International Paper Sizes (e.g. A4) use a 1:√2 ratio. If you cut them in half crosswise, the same ratio will be maintained. It"s great for scaling up or down.',
'You can cut a sphere up into pieces, and then reassemble those pieces to get two spheres which are exactly the same as the first sphere. This is called the Banach-Tarski Paradox.',
'The number 9 is believed to be a magical number with certain very interesting properties. This is because if you multiply a number with 9, and add all the digits of the resulting number, the sum would always come out to be 9.',
];

//=========================================================================================================================================
//Editing anything below this line might break your skill.
//=========================================================================================================================================

const GetNewFactHandler = {
  canHandle(handlerInput) {
    const request = handlerInput.requestEnvelope.request;
    return request.type === 'LaunchRequest'
      || (request.type === 'IntentRequest'
        && request.intent.name === 'GetNewFactIntent');
  },
  handle(handlerInput) {
    const randomFact = cookbook.getRandomItem(data);
    const speechOutput = GET_FACT_MESSAGE + randomFact;

    return handlerInput.responseBuilder
      .speak(speechOutput)
      .withSimpleCard(SKILL_NAME, randomFact)
      .getResponse();
  },
};

const HelpHandler = {
  canHandle(handlerInput) {
    const request = handlerInput.requestEnvelope.request;
    return request.type === 'IntentRequest'
      && request.intent.name === 'AMAZON.HelpIntent';
  },
  handle(handlerInput) {
    return handlerInput.responseBuilder
      .speak(HELP_MESSAGE)
      .reprompt(HELP_REPROMPT)
      .getResponse();
  },
};

const FallbackHandler = {
  // 2018-May-01: AMAZON.FallbackIntent is only currently available in en-US locale.
  //              This handler will not be triggered except in that locale, so it can be
  //              safely deployed for any locale.
  canHandle(handlerInput) {
    const request = handlerInput.requestEnvelope.request;
    return request.type === 'IntentRequest'
      && request.intent.name === 'AMAZON.FallbackIntent';
  },
  handle(handlerInput) {
    return handlerInput.responseBuilder
      .speak(FALLBACK_MESSAGE)
      .reprompt(FALLBACK_REPROMPT)
      .getResponse();
  },
};

const ExitHandler = {
  canHandle(handlerInput) {
    const request = handlerInput.requestEnvelope.request;
    return request.type === 'IntentRequest'
      && (request.intent.name === 'AMAZON.CancelIntent'
        || request.intent.name === 'AMAZON.StopIntent');
  },
  handle(handlerInput) {
    return handlerInput.responseBuilder
      .speak(STOP_MESSAGE)
      .getResponse();
  },
};

const SessionEndedRequestHandler = {
  canHandle(handlerInput) {
    const request = handlerInput.requestEnvelope.request;
    return request.type === 'SessionEndedRequest';
  },
  handle(handlerInput) {
    console.log(`Session ended with reason: ${handlerInput.requestEnvelope.request.reason}`);

    return handlerInput.responseBuilder.getResponse();
  },
};

const ErrorHandler = {
  canHandle() {
    return true;
  },
  handle(handlerInput, error) {
    console.log(`Error handled: ${error.message}`);

    return handlerInput.responseBuilder
      .speak('Sorry, an error occurred.')
      .reprompt('Sorry, an error occurred.')
      .getResponse();
  },
};

const skillBuilder = Alexa.SkillBuilders.custom();

exports.handler = skillBuilder
  .addRequestHandlers(
    GetNewFactHandler,
    HelpHandler,
    ExitHandler,
    FallbackHandler,
    SessionEndedRequestHandler
  )
  .addErrorHandlers(ErrorHandler)
  .lambda();
