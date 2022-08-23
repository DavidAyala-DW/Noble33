const Space = (props) => {
  const {heightDesktop,heightMobile} = props;
  return (
    <>

      <style jsx>{`

        .space{
          height: ${heightMobile}px;
        }

        @media(min-width: 768px){
          .space{
            height: ${heightDesktop}px;
          }
        }


      `}</style>

      <div className="space"></div>

    </>
  );
}

export default Space;
