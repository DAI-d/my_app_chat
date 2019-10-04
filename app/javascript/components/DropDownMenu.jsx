import React from 'react'

class DropDownMenu extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      listOpen: false,
    }
  }

  toggleList() {
    this.setState(prevState => ({
      listOpen: !prevState.listOpen,
    }))
  }

  handleClickMenu(val) {
    alert(val)
  }

  render() {
    const { listOpen } = this.state
    return (
      <div style={styles.dropDownMenu}> {/* 定義したスタイルを呼び出す */}
        <div onClick={this.toggleList.bind(this)} style={styles.menuButton}> {/* ES6だとbind(this)がないとtoggleList()がundifined */}
          menu
        </div>
        {listOpen && ( /* listOpenがtrueの場合に下記を表示させる */
          <div style={styles.menuBox}>
            <div style={styles.menuContent}>
              <div onClick={this.handleClickMenu.bind(this, 1)}>menu 1</div>
            </div>
            <div style={styles.menuContent}>
              <div onClick={this.handleClickMenu.bind(this, 2)} style={{color:"red"}}>menu 2</div> {/* スタイルはベタ書きでも */}
            </div>
            <div style={styles.lastMenuContent}>
              <div onClick={this.handleClickMenu.bind(this, 3)}>menu 3</div>
            </div>
          </div>
        )}
      </div>
    )
  }
}

const styles = {
  dropDownMenu: {
    fontSize: '30px',
    position: 'relative',
    margin: '20px 0 0 20px',
  },
  menuButton: {
    display: 'inline',
    cursor: 'pointer',
    border: '1px solid black',
    padding: '3px 5px',
  },
  menuBox: {
    position: 'absolute',
    top: '40px',
    width: '150px',
    zIndex: 1,
    cursor: 'pointer',
    border: '1px solid black',
  },
  menuContent: {
    padding: '3px 5px',
    borderBottom: '1px solid black',
  },
  lastMenuContent: {
    padding: '3px 5px',
  },
}

export default DropDownMenu