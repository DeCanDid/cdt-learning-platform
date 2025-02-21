import '../props/Props.css';

const TestimonialCard = ({img, name, role, message}) => {
  return (
    <>
      <div className="testimonail_card">
        <div>
          <div>
            <img src={img} alt="" />
          </div>
          <div className="mx-3">
            <h5>{name}</h5>
            <small>{role}</small>
          </div>
        </div>

        <article>
          <small>{message}</small>
        </article>
      </div>
    </>
  );
};

export default TestimonialCard;
