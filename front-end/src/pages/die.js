import "../styles/die.css";
import Stegosaurus2 from "../photos/stegosaurus2.png";
import Trex2 from "../photos/trex2.png";
import Triceratops2 from "../photos/Triceraptors2.jpeg";
import spinosaurus2 from "../photos/spinosaurus2.jpeg";
import apatosaurus2 from "../photos/apatosaurus2.jpeg";
import velociraptor2 from "../photos/velociraptor2.png";
import Search from "../photos/search (1).png";
import Logo from "../photos/dinosaur-logo.png";

export const DiePage = () => {
  return (
    <div className="home-container">
      <div className="header">
        <div className="inside-header">
          <img alt="logo" src={Logo} className="piece"></img>
          <div className="piece">Types of Dinosaur</div>
          <div className="piece">Dinosaurs</div>
          <div className="piece selected">When did dinosaurs live?</div>
          <div className="piece">How did dinosaurs die?</div>
        </div>
      </div>
      <div className="introduction">
        <div className="Welcome-die"> When did Dinosaurs Die</div>
        <div className="Welcome-text">
          A friendly yet encyclopedic guide to the some of the most
        </div>
        <div className="Welcome-text1">
          {" "}
          incredible animals to ever walk the Earth, the Dinosaurs.
        </div>
        <div className="search-input">
          <input placeholder="Search dinosaurs" className="input"></input>
          <img src={Search} alt="search2" className="search-button"></img>
        </div>
      </div>
      <div className="Title">
        <div className="titletext">
          There were many different kinds of dinosaurs that lived during the
          Mesozoic Era, which lasted from about 252 million years ago to 66
          million years ago. It's estimated that there were over 1,000 different
          species of dinosaurs, but not all of them lived at the same time.
        </div>
        <div className="titletext">
          Dinosaurs can be divided into two main groups: Saurischians and
          Ornithischians.
          <div>
            Saurischians are meat-eating dinosaur's like Trex, Veliciraptor as
            well as long necked dinosaurs like Apatosaurus and Brachiosaurus.
          </div>
          <div>
            Ornithischian dinosaurs include the horned and frilled dinosaurs
            like Triceratops and the armored dinosaurs like Stegosaurus and
            Ankylosaurus.
          </div>
        </div>
      </div>
      <div className="bottom">
        <div className="column">
          Tyrannosaurus Rex 🔍
          <img src={Trex2} alt="Trex2-img" className="trex2-img"></img>
        </div>
        <div className="column">
          apatosaurus 🔍
          <img src={apatosaurus2} alt="Apato2-img" className="apato2-img"></img>
        </div>
        <div className="column">
          Spinosaurus 🔍
          <img src={spinosaurus2} alt="Spino2-img" className="spino2-img"></img>
        </div>
        <div className="column">
          Triceratops 🔍
          <img src={Triceratops2} alt="Trice2-img" className="Trice2-img"></img>
        </div>
        <div className="column">
          Velociraptors 🔍
          <img src={velociraptor2} alt="Velo2-img" className="velo2-img"></img>
        </div>
        <div className="column">
          Stegosaurus 🔍
          <img src={Stegosaurus2} alt="Stego2-img" className="Stego2-img"></img>
        </div>
      </div>
      <div className="bottom2">
        <div className="column2">
          <div className="describtion1">
            <div>SIZE: LENGTH 13.5M HEIGHT 5.5M</div>
            <div>WEIGHT: 3175KG TO 6350KG</div>
            <div>DIET: CARNIVORE, LARGE ANIMALS, INCLUDING HUMANS</div>
            <div>
              The ferocious Tyrannosaurus rex... Article Mass Extinction Around
              65 million years ago, something unusual happened on our planet –
              and we can see it in the fossil record. Article Missing Marine
              Life Large dinosaurs like T. Rex are the most famous creatures
              that went extinct some 65 million years ago.
            </div>
          </div>
        </div>
        <div className="column2">
          <div className="describtion2">
            <div>SIZE: LENGTH 27M HEIGHT 6M</div>
            <div>WEIGHT: 9071KG TO 19958 KG</div>
            <div>DIET: HERBIVORE; FERNS, CYCADS, AND CONIFERS</div>
            <div>
              Apatosaurus lived during the late Jurassic Period, about 157-146
              million years ago. There was a minor mass extinction toward the
              end of the Jurassic period. During this extinction, most of the
              stegosaurid and enormous sauropod dinosaurs died out, as did many
              genera of ammonoids, marine reptiles, and bivalves.
            </div>
          </div>
        </div>
        <div className="column2">
          <div className="describtion3">
            <div>SIZE: LENGTH 14M-18M HEIGHT 5.4M</div>
            <div>WEIGHT: 12000KG TO 20000KG</div>
            <div>DIET: CARNIVORE, LARGE ANIMALS, INCLUDING HUMANS</div>
            <div>
              This very large dinosaur roamed North Africa, particularly the
              swamps where modern day Egypt and Morocco are. Time Period:
              Spinosaurus lived during the Cretaceous period which was 112- 97
              million years ago.
            </div>
          </div>
        </div>
        <div className="column2">
          <div className="describtion4">
            <div>SIZE: LENGTH 8.9M HEIGHT 3.6M</div>
            <div>WEIGHT: 5443KG, TO 9979KG</div>
            <div>
              DIET: HERBIVORE, FEEDING ON CYCADS, PALMS, AND OTHER TOUGH PLANTS
            </div>
            <div>
              66 million years ago It is one of the last-known non-avian
              dinosaur genera, and became extinct in the Cretaceous–Paleogene
              extinction event 66 million years ago.
            </div>
          </div>
        </div>
        <div className="column2">
          <div className="describtion5">
            <div>SIZE: LENGTH 3.9M HEIGHT 1.7M</div>
            <div>WEIGHT: 226KG</div>
            <div>
              DIET: CARNIVORE, SMALL MAMMALS AND DINOSAURS ALONE. LARGER
              DINOSAURS IN PACKS.
            </div>
            <div>
              around 66 million years ago Velociraptor lived during at the end
              of the Cretaceous Period, between 85.8 to 70.6 million years ago.
              Scientists believe that it went extinct around 66 million years
              ago as part of a specific extinction event.
            </div>
          </div>
        </div>
        <div className="column2">
          <div className="describtion6">
            <div>SIZE: LENGTH 10.1M HEIGHT 5M</div>
            <div>WEIGHT: 1587KG TO 3492KG</div>
            <div>DIET: HERBIVORE; LOW-LYING FERNS AND CYCADS</div>
            <div>
              Stegosaurus, for example, lived during the Late Jurassic Period,
              about 150 million years ago. Tyrannosaurus rex lived during the
              Late Cretaceous Period, about 72 million years ago. Stegosaurus
              was extinct for 66 million years before Tyrannosaurus walked on
              Earth.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
