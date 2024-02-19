import antya from "../assets/image-tanya.jpg";
import john from "../assets/image-john.jpg";
import preview from "../assets/icon-prev.svg";
import next from "../assets/icon-next.svg";
const SlideCard = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="">
        <div>
          <div
            className="w-[635px] h-[220px] text-[#202047] text-[32px] font-[300]
          leading-[44px] font-inter  relative mr-[-3.7rem] my-10">
            &quot; I&apos;ve been interested in coding for a while but never
            taken the jump, until now. I couldn&apos;t recommend this course
            enough. I&apos;m now in the job of my dreams and so excited about
            the furture.&quot;
          </div>
          <div
            className="w-[265px] flex gap-2 text-[#202047] text-[20px]
          font-[700] font-inter leading-[38px]  ">
            <div className="w-[137px]">Tanya Sinclair</div>
            <div className="w-[118px] text-[#b9b9ce] font-[500]">
              UX Engineer
            </div>
          </div>
        </div>
        <div>
        <div
            className="w-[635px] h-[220px] text-[#202047] text-[32px] font-[300]
          leading-[44px] font-inter  relative mr-[-3.7rem] my-10">
            &quot; I&apos;ve been interested in coding for a while but never
            taken the jump, until now. I couldn&apos;t recommend this course
            enough. I&apos;m now in the job of my dreams and so excited about
            the furture.&quot;
          </div>
          <div
            className="w-[265px] flex gap-2 text-[#202047] text-[20px]
          font-[700] font-inter leading-[38px]  ">
            <div className="w-[137px]">Tanya Sinclair</div>
            <div className="w-[118px] text-[#b9b9ce] font-[500]">
              UX Engineer
            </div> 
        </div>
      </div>
      <div>
        {/* <img
          className="w-[540px] h-[540px] rounded-[5px] justify-center my-[9.199rem] "
          src={antya}
          alt=""
        /> */}
        <img
          className="w-[540px] h-[540px] rounded-[5px] justify-center my-[9.199rem] "
          src={john}
          alt=""
        />
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
