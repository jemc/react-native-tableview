/* eslint-disable no-alert */
import React from 'react';
import TableView from 'react-native-tableview';

const { Section, Item } = TableView;
const { DisclosureIndicator } = TableView.Consts.AccessoryType;

const Example9 = () => (
  <TableView
    style={{ flex: 1 }}
    tableViewStyle={TableView.Consts.Style.Grouped}
    headerTextColor="#aa2222"
    headerBackgroundColor="#ffcccc"
    footerTextColor="#aa0022"
    footerBackgroundColor="#ffaacc"
    textColor="#333300"
    detailTextColor="#0000ff"
    cellBackgroundColor="#ffffcc"
    selectedTextColor="#003300"
    selectedBackgroundColor="#ccffcc"
    separatorColor="#2200ff"
  >
    <Section label="Header" footerLabel="Footer">
      <Item accessoryType={DisclosureIndicator} detail="Subtitle">
        Title
      </Item>
      <Item accessoryType={DisclosureIndicator} selected detail="Subtitle">
        Title
      </Item>
      <Item accessoryType={DisclosureIndicator} detail="Subtitle">
        Title
      </Item>
    </Section>
  </TableView>
);

export default Example9;
