import { useState } from "react";
import "./App.css";
import { Button, Input, Space, Modal } from "antd";

function App() {
  const [formSending, setFormSending] = useState(false);
  const [value, setValue] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [message, setMessage] = useState("");

  const names = [
    "sevval",
    "şevval",
    "alperen",
    "baran",
    "funda",
    "mira",
    "nilay",
    "ozge",
    "özge",
    "bengisu",
    "dora",
    "funda",
    "justin",
  ];

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleSubmit = () => {
    setFormSending(true);

    if (
      value.toLowerCase() === names[0].toLowerCase() ||
      value === names[1].toLowerCase()
    ) {
      setFormSending(false);
      setIsModalOpen(true);
      setMessage("Sen hic davetli degilsin");
    } else if (!names.includes(value)) {
      setFormSending(false);
      setIsModalOpen(true);
      setMessage("Bu kisi Serkan'in arkisi degildir");
    } else if (value.toLowerCase() === names[names.length - 1].toLowerCase()) {
      setFormSending(false);
      setIsModalOpen(true);
      setMessage("Sen onur konugusun!!!");
    } else if (
      value.toLowerCase() !== names[0].toLowerCase() ||
      value.toLowerCase() !== names[1].toLowerCase()
    ) {
      setFormSending(false);
      setIsModalOpen(true);
      setMessage("Davetli degilsin");
    }
  };

  return (
    <div className="App">
      <div className="container">
        <div className="text">
          <h1>Seko'nun Dogum Gunune Hos Geldiniz!!</h1>
          <p>Davetli olup olmadiginizi gormek icin adinizi aratiniz!</p>
          <p>Isminizi ingilizce karakterle aratiniz!!!</p>
        </div>
        {!formSending && (
          <Space.Compact style={{ width: "100%", height: "50px" }}>
            <Input
              placeholder="Add Todo"
              defaultValue=""
              allowClear
              value={value}
              onChange={(event) => setValue(event.target.value)}
              onKeyPress={(e) => {
                if (e.key === "Enter") {
                  handleSubmit(e);
                }
              }}
            />
            <Button
              type="primary"
              disabled={!value}
              style={{ height: "50px" }}
              onClick={handleSubmit}
            >
              Submit
            </Button>
          </Space.Compact>
        )}
        {isModalOpen && (
          <Modal
            open={isModalOpen}
            onOk={handleOk}
            onCancel={handleCancel}
            style={{ height: "400px" }}
            className="modal"
          >
            <p>
              {" "}
              <b>Sevgili {value} </b>
            </p>
            {message}
          </Modal>
        )}
      </div>
    </div>
  );
}

export default App;
