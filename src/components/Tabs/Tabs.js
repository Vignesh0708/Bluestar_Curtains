import React, { useState } from "react";
import { Tab, Tabs } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Tabs.css";
import { FaQuestionCircle, FaEnvelope, FaUndoAlt } from "react-icons/fa"; // Import icons

const CurtainDetails = () => {
  const [activeKey, setActiveKey] = useState("description");

  return (
    <div className="container mt-4">
      <Tabs
        id="curtain-tabs"
        activeKey={activeKey}
        onSelect={(k) => setActiveKey(k)}
        className="mb-3"
      >
        <Tab eventKey="description" title="Description">
          <div>
            <p className="line1">
              The first in our linen printed curtain range. This minimal print
              is inspired by the tulsi flowers and hence its name.
            </p>
            <ul>
              <li>Single Curtain</li>
              <li>100% Premium Cotton</li>
              <li>OEKO Tex certified 100% safe colors</li>
              <li>No Color bleed - Guaranteed</li>
              <li>
                Fabric Treatment: Pre-washed & shrinkage controlled. Maximum
                shrinkage tolerance is 3%.
              </li>
              <li>
                Width: Wider 60" width for enhanced pleating, covers
                approximately 2.5 - 3 feet
              </li>
              <li>
                Eyelet / grommet is the standard header style with high-quality
                rustproof stainless steel rings
              </li>
              <li>
                Pleated curtains can have only attached linings (50% or 100%),
                not detachable
              </li>
              <li>
                Coverage offered by pleated curtains is 25” for no lining and
                22” only with lining
              </li>
            </ul>
                <div className="additional-content  p-3">
        <p>
          Customize your curtains with us to perfectly fit your space. Choose
          the "Customize" option to get tailor-made curtains. Customization
          options:
        </p>
        <ol>
          <li>Choose the required height.</li>
          <li>Choose the preferred header style from a range of six options.</li>
        </ol>
        <p>Details to note for pleated curtains:</p>
        <ul>
          <li>
            Pleated curtains consume more fabric and will
            offer coverage of only 25” compared to 30” to 36” in other header
            styles.
          </li>
          <li>
             Coverage offered by pleated curtains is 25” for
            no lining and 22” only with lining.
          </li>
          <li>
             Pleated curtains can have only attached linings
            (50% or 100%), not detachable.
          </li>
        </ul>
        <p>
          <strong>3)</strong> Light Blocking lining: 50% cotton lining and 100%
          poly lining (100% Poly lining requires dry cleaning).
        </p>
        <p>
          <strong>4)</strong> Lining Attachment: Attached and Velcro detachable
          lining options are available for all header styles except for pleated
          curtains. Pleated comes with only attached lining.
        </p>
        <p>
          Width of 100% block out Lining curtain: 54" for all header styles, 22”
          only for pleated header style.
        </p>
        <p>
          <strong>5)</strong> Accessories: Choose from the option of detached
          button tie back or attached Velcro tie back.
        </p>
        <p>
          <strong>1.</strong> 5ft (60") extra wide curtains (25% higher than
          market) for more pleats and coverage.
        </p>
        <p>
          <strong>2.</strong> All our curtains are made to order with highest QC
          control.
        </p>

<div className="support-section">
  <div className="support-item">
    <FaQuestionCircle className="support-icon" />
    <span className="blue1">Help Placing The Order</span>
  </div>
  <div className="support-item">
    <FaEnvelope className="support-icon" />
    <span className="blue1">Write to us</span>
  </div>
  <div className="support-item">
    <FaUndoAlt className="support-icon" />
    <span className="blue1">Return Policy</span>
  </div>
</div>


  </div>
    </div>


        </Tab>
        <Tab eventKey="fabric-care" title="Fabric Care">
          <p>
            Machine wash cold with like colors, gentle cycle. Do not bleach.
            Tumble dry low, remove promptly. Warm iron if needed.
          </p>
        </Tab>
        <Tab eventKey="shipping" title="Shipping">
          <p>
            We offer standard and express shipping options. Delivery times may
            vary based on location. Free shipping on orders over $50.
          </p>
        </Tab>
        <Tab eventKey="reviews" title="Reviews">
          <p>
            ★★★★★ "Excellent quality and beautiful design! Highly recommend." -
            Customer A
          </p>
          <p>
            ★★★★☆ "Good fabric but took longer to arrive than expected." -
            Customer B
          </p>
        </Tab>
      </Tabs>

      {/* Support Icons Section */}

    </div>
  );
};

export default CurtainDetails;
