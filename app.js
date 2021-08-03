const profileDataArgs = process.argv.slice(2, process.argv.length);
// const name = profileDataArgs[0];
// const github = profileDataArgs[1];
const  [thomas, thomashub] = profileDataArgs;

const generatePage = (userName, githubName) => {
    return `
    Name: ${userName} 
    Github: ${githubName}
    `;
};
console.log(thomas, thomashub);
console.log(generatePage(name, github));










