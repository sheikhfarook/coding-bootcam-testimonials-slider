import antya from "../assets/image-tanya.jpg";
import john from "../assets/image-john.jpg";
import preview from "../assets/icon-prev.svg";
import next from "../assets/icon-next.svg";
const SlideCard = () => {
  return (
    <div>
      <div>
          &quot;I&quot;ve been interested in coding for a while but never taken
          the jump , until now. I couldn&quot;t recommend this course
          enough.I&quot;m now in the job of my dreams and so ecited about the
          furture.&quot;
        </p>
        <p>
          Tanya Sinclair <span>UX Engineer</span>
        </p>
      </div>
      <div>
        <img className="" src={antya} alt="" />
        <img src={john} alt="" />
        <div>
          <button className="">
            <img src={preview} alt="" />
          </button>
          <button>
            <img src={next} alt="" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SlideCard;
