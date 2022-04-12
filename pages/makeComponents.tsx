import HomeSlide from "../components/HomeSlide";
import SlideImage from "../components/SlideImage";
import Thumb from "../components/Thumb";
import { thumb} from '../fakeData';

export default function makeComponents() {
    return (
        <div style={{display: 'flex', justifyContent: 'center'}}>
            { thumb.map((data, i) => {
                return <Thumb data={data} size={400} />
            })}
        </div>
    )
}