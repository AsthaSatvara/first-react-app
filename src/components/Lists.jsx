import '../components/Netflix.css';

export const SeriesCard = ({ data }) => {
    const { id, img_url, name, rating, description, genre, watch_link } = data;
    
    const btn_style = {
        padding: "1.2rem 2.4rem",
        border: "none",
        backgroundColor: `${rating > 4 ? "#7dcea0" : "#f7dc6f"}`,
        color: "var(--heading-color)",
        fontSize: "1.6rem",
    }
    const ratingStyle = rating > 4 ? "super_hit" : "average";
    return (
        <li className="card">
            <div>
                <img src={img_url}
                    alt={name}
                    height="200px"
                    width="100%" />
            </div>
            <div className="card-details">
                <h2>Name : {name} </h2>
                <h4>Rating : <span className={`rating ${ratingStyle}`}> {rating} </span> </h4>
                <p>Summary : {description} </p>
                {/* <p>Sumamry : {summary} </p> */}
                <p>Genre : {genre} </p>
                {/* <button>{age >= 18 ? "Watch Now" : "Not Available"}</button>  */}
                {/* <button>{canWatch}</button> */}
                <a href={watch_link} target="_blank">
                    <button style={btn_style}>Watch Now</button>
                </a>
            </div>
        </li>
    );
};

