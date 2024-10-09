
import "../styles/tree.css";

const TreeComponent = ({onNodeClick}) => {

  const handleClick = (targetIds, event) => {
    event.preventDefault();
    if (onNodeClick) {
      onNodeClick(targetIds); // Call the passed handler with the nodeId
    }
    targetIds.forEach((targetId) => {
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.checked = true; // Check the checkbox or radio button
      } else {
        console.log(`Element with ID ${targetId} not found`);
      }
  
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    });
  };
  
  

  return (
    <div className="tree">
      <ul>
        <li>
          <a href="#home">Gant</a>
          <ul>
            <li>
              <a href="#home">Factory location: India</a>
              <ul>
                <li>
                  <a href="#home">Brand Owner: Self</a>
                  <ul>
                    <li>
                      <a href="#home">Brand Registered</a>
                      <ul>
                        <li>
                          <a
                            href="#home"
                            id="docList1"
                            class="doclist"
                            onClick={(event) =>
                              handleClick(["form2", "form3C"], event)
                            }
                          >
                            1.Form-II (Undertaking) <br />
                            2.Form-III C
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="#home">Brand not Registered</a>
                      <ul>
                        <li>
                          <a
                            href="#home"
                            id="docList2"
                            class="doclist"
                            onClick={(event) =>
                              handleClick(
                                ["form2", "form3C", "unregTmr"],
                                event
                              )
                            }
                          >
                            1.Form-II (Undertaking) <br />
                            2.Unregistered TMR Declaration <br />
                            3.Form-III C
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#home">Brand Owner: Others</a>
                  <ul>
                    <li>
                      <a href="#home">Brand Registered</a>
                      <ul>
                        <li>
                          <a
                            href="#home"
                            id="docList4"
                            class="doclist"
                            onClick={(event) =>
                              handleClick(
                                ["form2", "brandAuth", "form3C"],
                                event
                              )
                            }
                          >
                            1.Form-II (Undertaking) <br />
                            2.Brand Authorization
                            <br />
                            3.Form-III C
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="#home">Brand not Registered</a>
                      <ul>
                        <li>
                          <a
                            href="#home"
                            id="docList4"
                            class="doclist"
                            onClick={(event) =>
                              handleClick(
                                ["form2", "brandAuth", "unregTmr", "form3C"],
                                event
                              )
                            }
                          >
                            1.Form-II (Undertaking) <br />
                            2.Brand Authorization
                            <br />
                            3.Unregistered TMR Declaration <br />
                            4.Form-III C
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li>
              <a href="#home">Factory location: Foreign</a>
              <ul>
                <li>
                  <a href="#home">Brand Owner: Self</a>
                  <ul>
                    <li>
                      <a href="#home">brand Registered</a>
                      <ul>
                        <li>
                          <a href="#home">Factory Liasion Office:Yes</a>
                          <ul>
                            <li>
                              <a
                                href="#home"
                                id="docList5"
                                class="doclist"
                                onClick={(event) =>
                                  handleClick(
                                    ["form2", "form4A", "form3A"],
                                    event
                                  )
                                }
                              >
                                1.Form-II (Undertaking) <br />
                                2.Form-III A <br />
                                3.Form-IV Nomination <br />
                                (Factory liaison office / subsidiary firm/
                                branch office)
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="#home">Factory Liasion Office:No</a>
                          <ul>
                            <li>
                              <a
                                href="#home"
                                id="docList6"
                                class="doclist"
                                onClick={(event) =>
                                  handleClick(
                                    ["form2", "form4C", "", "form3B2"],
                                    event
                                  )
                                }
                              >
                                1.Form-II (Undertaking) <br />
                                2.Form-III B <br />
                                (Major importer/distributor/ entity having
                                marketing tie-up) <br />
                                3.Form-IV Nomination
                                <br />
                                (Major importer/distributor/ entity having
                                marketing tie-up)
                              </a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="#home">Brand not Registered</a>
                      <ul>
                        <li>
                          <a href="#home">Factory Liasion Office: Yes</a>
                          <ul>
                            <li>
                              <a
                                href="#home"
                                id="docList7"
                                class="doclist"
                                onClick={(event) =>
                                  handleClick(
                                    ["form2", "form4A", "unregTmr", "form3A"],
                                    event
                                  )
                                }
                              >
                                1.Form-II (Undertaking) <br />
                                2.Unregistered TMR Declaration <br />
                                3.Form-III A <br />
                                4.Form-IV Nomination <br />
                                (Factory liaison office / subsidiary firm/
                                branch office)
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="#home">Factory Liasion Office: No</a>
                          <ul>
                            <li>
                              <a
                                href="#home"
                                id="docList8"
                                class="doclist"
                                onClick={(event) =>
                                  handleClick(
                                    ["form2", "unregTmr", "form4C", "form3B2"],
                                    event
                                  )
                                }
                              >
                                1.Form-II (Undertaking) <br />
                                2.Unregistered TMR Declaration <br />
                                3.Form-III B <br />
                                (Major importer/distributor/ entity having
                                marketing tie-up) <br />
                                4.Form-IV Nomination
                                <br />
                                (Major importer/distributor/ entity having
                                marketing tie-up)
                              </a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#home">Brand Owner: Others</a>
                  <ul>
                    <li>
                      <a href="#home">Brand Registered</a>
                      <ul>
                        <li>
                          <a href="#home">Factory Liasion Office: Yes</a>
                          <ul>
                            <li>
                              <a
                                href="#home"
                                id="docList9"
                                class="doclist"
                                onClick={(event) =>
                                  handleClick(
                                    ["form2", "brandAuth", "form4A", "form3A"],
                                    event
                                  )
                                }
                              >
                                1.Form-II (Undertaking) <br />
                                2.Brand Authorization <br />
                                3.Form-III A <br />
                                4.Form-IV Nomination <br />
                                (Factory liaison office / subsidiary firm/
                                branch office)
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="#home">Factory Liasion Office: No</a>
                          <ul>
                            <li>
                              <a href="#home">Brand/Liasion Office: Yes</a>
                              <ul>
                                <li>
                                  <a
                                    href="#home"
                                    id="docList10"
                                    class="doclist"
                                    onClick={(event) =>
                                      handleClick(
                                        [
                                          "form2",
                                          "brandAuth",
                                          "form3B1",
                                          "form4B",
                                        ],
                                        event
                                      )
                                    }
                                  >
                                    1.Form-II (Undertaking) <br />
                                    2.Brand Authorization <br />
                                    3.Form-III B <br />
                                    (Brand Owner/Proprietor/Registered User/
                                    <br />
                                    subsidiary office/ liaison office of the
                                    Brand/Trademark) <br />
                                    4.Form-IV Nomination <br />
                                    (Proprietor/Registered user/ <br />
                                    subsidiary firm/Liasion office of the
                                    Brand/Trademark)
                                  </a>
                                </li>
                              </ul>
                            </li>
                            <li>
                              <a href="#home">Brand/Liasion Office: No</a>
                              <ul>
                                <li>
                                  <a
                                    href="#home"
                                    id="docList11"
                                    class="doclist"
                                    onClick={(event) =>
                                      handleClick(
                                        [
                                          "form2",
                                          "brandAuth",
                                          "nonexistenceBrand",
                                          "form3B2",
                                          "form4C",
                                        ],
                                        event
                                      )
                                    }
                                  >
                                    1.Form-II (Undertaking) <br />
                                    2.Brand Authorization <br />
                                    3.Nonexistence brand owner declaration{" "}
                                    <br />
                                    4.Form-III B <br />
                                    (Major importer/distributor/ entity having
                                    marketing tie-up) <br />
                                    5.Form-IV Nomination
                                    <br />
                                    (Major importer/distributor/ entity having
                                    marketing tie-up)
                                  </a>
                                </li>
                              </ul>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="#home">Brand Not Registered</a>
                      <ul>
                        <li>
                          <a href="#home">Factory Liasion Office: Yes</a>
                          <ul>
                            <li>
                              <a
                                href="#home"
                                id="docList12"
                                class="doclist"
                                onClick={(event) =>
                                  handleClick(
                                    [
                                      "form2",
                                      "brandAuth",
                                      "unregTmr",
                                      "form3A",
                                      "form4A",
                                    ],
                                    event
                                  )
                                }
                              >
                                1.Form-II (Undertaking) <br />
                                2.Brand Auhtorization <br />
                                3.Unregistered TMR Declaration <br />
                                4.Form-III A <br />
                                5.Form-IV Nomination <br />
                                (Factory liaison office / subsidiary firm/
                                branch office)
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="#home">Factory Liasion Office: No</a>
                          <ul>
                            <li>
                              <a href="#home">Brand/Liasion Office: Yes</a>
                              <ul>
                                <li>
                                  <a
                                    href="#home"
                                    id="docList13"
                                    class="doclist"
                                    onClick={(event) =>
                                      handleClick(
                                        [
                                          "form2",
                                          "brandAuth",
                                          "unregTmr",
                                          "form3B1",
                                          "form4B",
                                        ],
                                        event
                                      )
                                    }
                                  >
                                    1.Form-II (Undertaking) <br />
                                    2.Brand Authorization <br />
                                    3.Unregistered TMR Declaration <br />
                                    4.Form-III B <br />
                                    (Brand Owner/Proprietor/Registered User/
                                    <br />
                                    subsidiary office/ liaison office of the
                                    Brand/Trademark) <br />
                                    5.Form-IV Nomination
                                    <br />
                                    (Proprietor/Registered user/ <br />
                                    subsidiary firm/liaison office of the
                                    Brand/Trademark)
                                  </a>
                                </li>
                              </ul>
                            </li>
                            <li>
                              <a href="#home">Brand/Liasion Office: No</a>
                              <ul>
                                <li>
                                  <a
                                    href="#home"
                                    id="docList14"
                                    class="doclist"
                                    onClick={(event) =>
                                      handleClick(
                                        [
                                          "form2",
                                          "brandAuth",
                                          "unregTmr",
                                          "nonexistenceBrand",
                                          "form3B2",
                                          "form4C",
                                        ],
                                        event
                                      )
                                    }
                                  >
                                    1.Form-II (Undertaking) <br />
                                    2.Brand Authorization <br />
                                    3.Unregistered TMR Declaration <br />
                                    4.Nonexistence brand owner declaration
                                    <br />
                                    5.Form-III B <br />
                                    (Major importer/distributor/ entity having
                                    marketing tie-up) <br />
                                    6.Form-IV Nomination
                                    <br />
                                    (Major importer/distributor/ entity having
                                    marketing tie-up)
                                  </a>
                                </li>
                              </ul>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default TreeComponent;
