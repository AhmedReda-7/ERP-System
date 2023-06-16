import { createContext, useState } from "react";

import axios from "axios";
import Swal from "sweetalert2";

const TemplateContext = createContext();

export function TemplateContextProvider({ children }) {
  const [data, setData] = useState([]);
  const [template, settemplate] = useState([]);
  const [detailData, setDetailData] = useState({
    tempId: "",
    tempName: template.tempName,
    tempDate: template.tempDate,
  });

  async function getAlltemplate() {
    const alltemplate = await axios.get(
      `https://localhost:44393/api/FmsGetAllTemplates`
    );

    setData(alltemplate.data);
  }

  async function getTemplateById(id) {
    const templateObject = await axios.get(
      `https://localhost:44393/api/FmsGetTemplateById/${id}`
    );

    setDetailData(templateObject.data);
    settemplate(templateObject.data.accounts);
  }
  async function returnTemplateById(id) {
    const templateObject = await axios.get(
      `https://localhost:44393/api/FmsGetTemplateById/${id}`
    );
      return templateObject;
  }

  async function deleteTemplate(id) {
    const deletedTemplate = await axios.delete(
      `https://localhost:44393/api/FmsDeleteTemplate?id=${id}`
    );
  }

  async function updateTemplate(id, updatedData) {
    const updatedTemplate = await axios.put(
      `https://localhost:44393/api/FmsUpdateTemplate/${id}`,
      updatedData
    );
  }

  const handleupdate = (id, updatedData) => {
    updateTemplate(id, updatedData);

    getAlltemplate();
  };
  async function getAlldistdel() {
    const alldist = await axios.get(
      `https://localhost:44393/api/FmsGetAllTemplates`
    );
    return alldist.data;
  }
  const handleDelete = (id) => {
    Swal.fire({
      icon: "warning",
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "No, cancel!",
    }).then((result) => {
      if (result.value) {
        Swal.fire({
          icon: "success",
          title: "Deleted!",
          showConfirmButton: false,
          timer: 2000,
        });

        deleteTemplate(id);
        setData(getAlldistdel());
        setData(data.filter((employee) => employee.tempId !== id));
      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        Swal.fire("Cancelled", "Your imaginary file is safe :)", "error");
      }
    });
  };

  const valuetoshare = {
    data,
    detailData,
    template,
    getAlltemplate,
    handleDelete,
    handleupdate,
    getTemplateById,
    returnTemplateById,
  };
  return (
    <TemplateContext.Provider value={valuetoshare}>
      {children}
    </TemplateContext.Provider>
  );
}

export default TemplateContext;
