const root = document.body;

function changeTitle() {
    // Change the title of the page to "(Your name)'s Portfolio"
    document.title = "Andre Silva"

}

function changeHeader() {
    // Change the name in the h1 of the page to your name
    root.children[0].children[0].innerText = "I am Andre Silva"
    // Your code here
}

function changeAboutMe() {
    /* Update the first paragraph in the About Me section with a small
     passage about yourself */

    root.children[1].children[1].innerText = "Anime is literally the best thing ever. All of you baka Americans who can't wrap your minds around it because you think your Hollywood films and TV shows you are just stupid and wrong and need to stop speaking. Literally nobody likes your opinions except the other baka Americans that don't understand Anime culture and the fact that Anime is truly a masterpiece of art, emotion and plot development. The characters always develop so well and so does the plot and it is just like really good."
    root.children[1].children[2].innerText = `like the word ばか that means idiot in japanese, but the wannabe japanese idiots will always try to type those words in the romaji, they type "baka", i hate seeing crap like that, stop trying to talk japanese if you don't even know it`
}

export {
    changeTitle,
    changeHeader,
    changeAboutMe
}
