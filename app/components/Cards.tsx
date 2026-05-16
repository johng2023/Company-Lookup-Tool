
import Card from "./Card"

export default function Cards({}){
    
    //gets companies from search input as prop and iterates through to generate individual card component(s) based off result

    //Fake data for now
    const companies = [
        { id: 1, company: "Apple", size: "100,000", marketCap: "1 trillion"}, {id: 2, company: "DJI", size: "10,000", marketCap: "3 billion"}
    ]

    return (
        <div>
            <ul>
                {companies.map((company) => (
                    <Card key={company.id}></Card>
                ))}
            </ul>
        </div>
    )


}