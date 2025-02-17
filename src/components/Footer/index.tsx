import React from "react";
import Image from 'next/image'

const footerMenus = [
  {
    title: "Mondo Sky",
    items: [
      {
        title: "NOW",
        url: "#"
      },
      {
        title: "Sky Business",
        url: "#"
      },
      {
        title: "Sky Group",
        url: "#"
      },
      {
        title: "Sky Media",
        url: "#"
      },
      {
        title: "Sky Extra",
        url: "#"
      },
      {
        title: "Sky Shop",
        url: "#"
      },
      {
        title: "Programmi",
        url: "#"
      }
    ]
  },
  {
    title: "Servizi",
    items: [
      {
        title: "Trova negozio Sky",
        url: "#"
      },
      {
        title: "Trova Sky Bar",
        url: "#"
      },
      {
        title: "Trova Sky Hotel",
        url: "#"
      },
      {
        title: "Trasloca Sky",
        url: "#"
      },
      {
        title: "Sky Expert",
        url: "#"
      },
      {
        title: "Sky nei condomini",
        url: "#"
      },
      {
        title: "Production Services",
        url: "#"
      },
      {
        title: "Agevolazioni per utenti con disabilità - Sky Mobile",
        url: "#"
      }
    ]
  },
  {
    title: "Per il Cliente",
    items: [
      {
        title: "Trasparenza tariffaria",
        url: "#"
      },
      {
        title: "Trasparenza tecnica",
        url: "#"
      },
      {
        title: "Listino, Moduli e Condizioni contrattuali",
        url: "#"
      },
      {
        title: "FAQ termini e condizioni",
        url: "#"
      },
      {
        title: "Informative privacy e cookie policy",
        url: "#"
      },
      {
        title: "Sky informa",
        url: "#"
      },
      {
        title: "Etichettatura ambientale",
        url: "#"
      },
      {
        title: "Sicurezza",
        url: "#"
      },
      {
        title: "Digital Services Act",
        url: "#"
      }
    ]
  },
  {
    title: "Assistenza",
    items: [
      {
        title: "Contatta Sky",
        url: "#"
      },
      {
        title: "App My Sky",
        url: "#"
      }
    ]
  },
// TODO: Add "Altro" menu that goes together with "Assistenza" in the same column
]

const creditsMenu = [
  {
    title: "Listino",
    url: "#"
  },
  {
    title: "Note legali",
    url: "#"
  },
  {
    title: "Privacy",
    url: "#"
  },
  {
    title: "Cookie",
    url: "#"
  },
  {
    title: "Sicurezza e Privacy",
    url: "#"
  }
]

export const Footer = () => {
  return (
      <>
        <footer>
          <div className="footer-menu-container">
            <div className="footer-menu">
              {
                footerMenus.map((menu, index) => {
                  return (
                      <div className="sfwc-column" key={index}>
                        <div role="group">
                          <h4 className="sfwc-title">{menu.title}</h4>
                          <ul className="sfwc-column-collection" aria-label={menu.title}>
                            {
                              menu.items.map((item, index) => {
                                return (
                                    <li className="sfwc-column-voice" key={index}>
                                      <a href={item.url}>{item.title}</a>
                                    </li>
                                )
                              })
                            }
                          </ul>
                        </div>
                      </div>
                  )
                })
              }
            </div>
          </div>
          <div className="footer-legal-container">
            <div className="footer-legal">
            <div className="sfwc-legal-section">
              <div className="credits">
                <div className="sky-logo-container">
                  <Image
                      src="/logo-sky.png"
                      width={55}
                      height={34.59}
                      alt="Sky logo"
                      className="sky-logo"
                  />
                </div>
                <div>
                  <div className="copyright-sky">Copyright 2024 Sky Italia - P.IVA 04619241005</div>
                  <div className="tutti-i-marchi-sky">Tutti i marchi Sky e i diritti di proprietà intellettuale in essi
                    contenuti, sono di proprietà di Sky international AG e sono utilizzati su licenza.
                  </div>
                </div>
              </div>
              <nav aria-label="Legal footer" className="sections">
                {
                  creditsMenu.map((item, index) => {
                    return (
                        <div className="sfwc-column" key={index}>
                          <a className="section
                          " href
                          ={item.url}>{item.title}</a>
                        </div>
                    )
                  })
                }
              </nav>
            </div>
          </div>
          </div>
        </footer>
        <div className="footer-spectrumLine"></div>
      </>
  );
};

export default Footer;
