import React, { useState } from "react";
import "antd/dist/antd.css";
import { Form, Input, Button, Select, DatePicker, Upload, message } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import API from "../../utils/API";

const FormSizeDemo = () => {
  const [componentSize, setComponentSize] = useState("default");

  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };
  //upload botton
  const props = {
    name: "file",
    action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
    headers: {
      authorization: "authorization-text",
    },
    onChange(info) {
      if (info.file.status !== "uploading") {
        console.log(info.file, info.fileList);
      }
      if (info.file.status === "done") {
        message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === "error") {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };
  const [formState, setFormState] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    petName: "",
    petType: "",
    petDescription: "",
    lastSeen: "",
    dateLost: "",
    reward: "",
  });
  const formSubmit = (e) => {
    e.preventDefault();
    API.getAllLostPets(formState).then((res) => {
      console.log(res.data);
      props.fetchData();
      setFormState({
        firstName: "",
        lastName: "",
        phoneNumber: "",
        email: "",
        petName: "",
        petType: "",
        petDescription: "",
        lastSeen: "",
        dateLost: "",
        reward: "",
      });
      console.log(formSubmit);
    });
  };
  return (
    <>
      <Form
        onSubmit={formSubmit}
        labelCol={{
          span: 4,
        }}
        wrapperCol={{
          span: 14,
        }}
        layout="horizontal"
        initialValues={{
          size: componentSize,
        }}
        onValuesChange={onFormLayoutChange}
        size={componentSize}
      >
        <Form.Item label="First Name ">
          <Input
            value={formState.firstName}
            type="firstName"
            onChange={(e) =>
              setFormState({ ...formState, firstName: e.target.value })
            }
          />
        </Form.Item>

        <Form.Item label="Last Name ">
          <Input
            value={formState.lastName}
            type="lastName"
            onChange={(e) =>
              setFormState({ ...formState, lastName: e.target.value })
            }
          />
        </Form.Item>

        <Form.Item label="Phone Number">
          <Input
            value={formState.phoneNumber}
            type="phoneNumber"
            onChange={(e) =>
              setFormState({ ...formState, phoneNumber: e.target.value })
            }
          />
        </Form.Item>

        <Form.Item label="Email">
          <Input
            value={formState.email}
            type="email"
            onChange={(e) =>
              setFormState({ ...formState, email: e.target.value })
            }
          />
        </Form.Item>

        <Form.Item label="Pet Name">
          <Input
            value={formState.petName}
            type="petName"
            ç
            onChange={(e) =>
              setFormState({ ...formState, petName: e.target.value })
            }
          />
        </Form.Item>

        <Form.Item label="Select Type Of Pet ">
          <Select>
            <Select.Option
              value={formState.petType}
              type="petType"
              onChange={(e) =>
                setFormState({ ...formState, petType: e.target.value })
              }
            >
              Dog
            </Select.Option>
            <Select.Option value="Cat">Cat</Select.Option>
          </Select>
        </Form.Item>

        <Form.Item label="Pet Description">
          <Input
            value={formState.petDescription}
            type="petDescription"
            onChange={(e) =>
              setFormState({ ...formState, petDescription: e.target.value })
            }
          />
        </Form.Item>

        <Form.Item label="Last Seen Location">
          <Input
            value={formState.lastSeen}
            type="lastSeen"
            onChange={(e) =>
              setFormState({ ...formState, lastSeen: e.target.value })
            }
          />
        </Form.Item>

        <Form.Item label="Date Lost">
          <DatePicker />
        </Form.Item>

        <Form.Item label="Reward">
          <Input
            value={formState.reward}
            type="reward"
            onChange={(e) =>
              setFormState({ ...formState, reward: e.target.value })
            }
          />
        </Form.Item>

        <Form.Item>
          <Upload {...props}>
            <Button icon={<UploadOutlined />}>Upload Image</Button>
          </Upload>
        </Form.Item>

        <Form.Item>
          <Button type="primary">Post Pet</Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default FormSizeDemo;
