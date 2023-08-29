import './intro.scss'
// ./ because its in the same file

// export default function intro() {
//     <div classname="intro">

//     </div>
// } 

// export default function Intro() {
//     return (
//           <div className="intro">
//             <h1>
//               genius.
//             </h1>
//           </div>
//     );
//   }

const Intro = () => {
    return (
          <div className="intro" id="intro">
            <h1>
              Intro
            </h1>
          </div>
    );

}

export default Intro