import React from "react";
import '../../src/styles/components/pages/nosotrospage.css';

const NosotrosPage = (props) => {
  return (
    <main className="holder">
      <div className="historia">
        <h2>Historia</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
          delectus ipsa corporis quia voluptates quos, eos quis sed voluptate
          dicta aliquam nemo. Commodi soluta ex id? Iste nam provident facilis.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
          delectus ipsa corporis quia voluptates quos, eos quis sed voluptate
          dicta aliquam nemo. Commodi soluta ex id? Iste nam provident facilis.
        </p>
      </div>

      <div className="staff">
        <h2>Staff</h2>
        <div className="personas">
          <div className="persona">
            <img src="../images/nosotros/nosotros1.jpg" alt="juan gomez" />
            <h5>Juan Gomez</h5>
            <h6>Gerente General</h6>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
              veritatis officia fugiat veniam perspiciatis nam vero earum
              consectetur repellendus. Aliquam tempore voluptate voluptatibus
              omnis libero nemo in quia amet aut.
            </p>
          </div>
          <div className="persona">
            <img src="../images/nosotros/nosotros2.jpg" alt="carlos zapata" />
            <h5>Carlos Zapata</h5>
            <h6>Gerente de asuntos sin importancia</h6>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
              veritatis officia fugiat veniam perspiciatis nam vero earum
              consectetur repellendus. Aliquam tempore voluptate voluptatibus
              omnis libero nemo in quia amet aut.
            </p>
          </div>
          <div className="persona">
            <img src="../images/nosotros/nosotros3.jpg" alt="jose gomez" />
            <h5>Jose Gomez</h5>
            <h6>Encargado del mate</h6>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
              veritatis officia fugiat veniam perspiciatis nam vero earum
              consectetur repellendus. Aliquam tempore voluptate voluptatibus
              omnis libero nemo in quia amet aut.
            </p>
          </div>
          <div className="persona">
            <img src="../images/nosotros/nosotros4.jpg" alt="hugo andrada" />
            <h5>Hugo Andrada</h5>
            <h6>Especialista en nada</h6>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
              veritatis officia fugiat veniam perspiciatis nam vero earum
              consectetur repellendus. Aliquam tempore voluptate voluptatibus
              omnis libero nemo in quia amet aut.
            </p>
          </div>
          <div className="persona">
            <img src="../images/nosotros/nosotros5.jpg" alt="leo messi" />
            <h5>Leo Messi</h5>
            <h6>Delantero</h6>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
              veritatis officia fugiat veniam perspiciatis nam vero earum
              consectetur repellendus. Aliquam tempore voluptate voluptatibus
              omnis libero nemo in quia amet aut.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default NosotrosPage;
