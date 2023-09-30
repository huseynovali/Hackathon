
import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Appeals.css";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useDispatch, useSelector } from "react-redux";
import { setShowTrue} from "../../../Store/detailSlice";

function Appeals() {
  const [rows, setRows] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filterStatus, setFilterStatus] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://northwind.vercel.app/api/products"
        );
        setRows(response.data);
      } catch (error) {
        console.error("Veri çekme hatası:", error);
      }
    };

    fetchData();
  }, []);

  const filteredRows = rows.filter((row) => {
    return (
      (row.name.toLowerCase().includes(searchText.toLowerCase()) ||
        searchText === "") &&
      (filterStatus === "" || row.status === filterStatus)
    );
  });
  const dispatch = useDispatch();
  const { show } = useSelector(state => state.detailSlice);
  console.log(show)

  const handleOpen = ()=>{
    dispatch(setShowTrue())
 }
  
  return (
    <div className="appeals__container">
      <h1 className="appeals__header__word">Appeals</h1>
    <>
      <Button onClick={()=>handleOpen()}>show</Button>
      {show ? <ShowDetail /> : <></>}
      <>
      <div className="search__and__filter w-full d-flex justify-between items-center">
        <div className="input__group">
          <input
            type="text"
            placeholder="Search ..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            style={{}}
          />
        </div>

        <div className="select__box">
          <select
            name=""
            id=""
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
          >
            <option value="">All Status</option>
            <option value="pending">Pending</option>
            <option value="accepted">Accepted</option>
            <option value="unaccepted">Unaccepted</option>
          </select>
        </div>
      </div>
      <TableContainer
        component={Paper}
        style={{ maxHeight: "450px", overflowY: "auto", padding: "24px" }}
      >
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead className="custom-table-header">
            <TableRow>
              <TableCell className="custom-table-text">Full name</TableCell>
              <TableCell className="custom-table-text" align="center">
                Edu type
              </TableCell>
              <TableCell className="custom-table-text" align="center">
                Date
              </TableCell>
              <TableCell className="custom-table-text" align="center">
                Status
              </TableCell>
              <TableCell
                className="custom-table-text"
                align="center"
              ></TableCell>
            </TableRow>
          </TableHead>
          <TableBody className="table__body">
            {filteredRows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="center">{row.id}</TableCell>
                <TableCell align="center">{row.categoryId}</TableCell>
                <TableCell align="center">{row.id}</TableCell>

                <TableCell>
                  {" "}
                  <button className="see__detail__btn">See Detail</button>{" "}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );

}

export default Appeals;
