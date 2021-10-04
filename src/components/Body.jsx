import Content from "./Content";
const contentArray = [{
    image: "/runner.svg", title: "Fast", description: { before : `About `, span: `3x faster`, after:` thanks to digital operations.\n
    English-speaking. Service-oriented.\n
    24/7 Chat-bot, tech-powered on-ground
    ops.`}},
{
    image: "/money.svg", title: "Cheap", description: {before: `About `, span: `30% cheaper`, after:` than the competition
thanks to digital setup & economies scale.\n
No hidden fees.`}},
{
    image: "/eye.svg", title: "Honest", description: {before:``, span:`No secret arrangements`, after:` with handymen.\n
Users access live accounts.`}}]

export default function Body() {
    return (
        <div className="body">
            <div className="body-logo">
                <p>Ralph<span>.</span></p>
                <img src="/handshake.svg" alt="logo" />
            </div>
            <div className="content-container">
                <div className="left">
                    {
                        contentArray.map((content, idx) => <Content key = {idx} image = {content.image} title = {content.title} description = {content.description} />)
                    }
                </div>
                <div className="right">
                    <p>Fed up with your slow property manager?</p>
                    <h2>Meet <span>Ralph</span>.</h2>
                </div>
            </div>
        </div>
    )
}