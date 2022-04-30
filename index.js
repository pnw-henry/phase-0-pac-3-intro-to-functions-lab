function shout(string) 
{
    return string.toUpperCase();
}

function whisper(string)
{
    return string.toLowerCase();
}

function logShout(string)
{
    console.log(string.toUpperCase());
}

function logWhisper(string)
{
    console.log(string.toLowerCase());
}

function sayHiToHeadphonedRoommate(string)
{
    let upperString = string.toUpperCase();
    let lowerString = string.toLowerCase();

    if (string === upperString){
        return 'YES INDEED!';
        }
    if (string === lowerString){
            return 'I can\'t hear you!';
            }
    if (string === 'Let\'s have dinner together!'){
            return 'I would love to!';
            }
    
    return;
}