<template>
  <div id="mainDiv" class="d-flex flex-column align-items-center">
    <section
      class="
        info
        animated-bg
        d-flex
        flex-column
        justify-content-center
        align-items-center
      "
      :style="infoStyle"
    >
      <span class="counter"
        >Mines Number :&nbsp;<span class="digital">{{
          minesCounter
        }}</span></span
      >
      <Timer
        class="timer"
        :isRunning="isGameRunning"
        :isresetNeeded="resetTimer"
      />
      <span class="counter"
        >{{ marksCounterLabel }}&nbsp;<span class="digital">{{
          marksCounter
        }}</span></span
      >
    </section>
    <hr />
    <section class="d-flex justify-content-between">
      <div id="accountDiv"></div>
      <div id="tableDiv" @contextmenu="preventDefaultEvents">
        <tbody class="table hoverable" :style="tableStyle">
          <tr v-for="rowObj in cellsRowFormatArray" :key="rowObj.id">
            <td v-for="obj in rowObj.row" :key="obj.uniqueKey">
              <Cell
                :cell="obj"
                :defCol="defaultColor"
                :revCol="revealedColor"
                :markCol="markedColor"
                :bombCol="bombColor"
                :minesNumCol="minesNumberColor"
                :defSize="cellSize"
                @left-click="onLeftClick"
                @right-click="onRightClick"
              />
            </td>
          </tr>
        </tbody>
      </div>
      <div id="recordDiv"></div>
    </section>

    <NewGame
      label="New Game"
      :fontFamily="tableFontFamily"
      :rowsNum="rows"
      :colsNum="cols"
      :minesNum="mines"
      @new-game="onNewGame"
    />
    <hr />

    <section class="settings d-flex flex-column" :style="settingsStyle">
      <div
        id="fontSettings"
        class="d-flex flex-column justify-content-start align-items-center"
      >
        <SettingsIcon
          imgType="font"
          targetID="fontSettingsList"
          @settingsIconClick="onSettingsIconClick"
        />
        <ul id="fontSettingsList" class="settings-list scale-down-ver-top">
          <li>
            <InputFont
              labelName="Info"
              :fontFamily="settingsFontFamily"
              :selectZIndex="100"
              :selectUpdator="selectElementsUpdator"
              eventName="info-font-change"
              @info-font-change="onInfoFontChange"
            />
          </li>
          <li>
            <InputFont
              labelName="Table"
              :fontFamily="settingsFontFamily"
              :selectZIndex="99"
              :selectUpdator="selectElementsUpdator"
              eventName="table-font-change"
              @table-font-change="onTableFontChange"
            />
          </li>
          <li>
            <InputFont
              labelName="Settings"
              :fontFamily="settingsFontFamily"
              :selectZIndex="98"
              :selectUpdator="selectElementsUpdator"
              eventName="settings-font-change"
              @settings-font-change="onSettingsFontChange"
            />
          </li>
        </ul>
      </div>

      <div
        id="numberSettings"
        class="d-flex flex-column justify-content-start align-items-center"
      >
        <SettingsIcon
          imgType="number"
          targetID="numberSettingsList"
          @settingsIconClick="onSettingsIconClick"
        />
        <ul id="numberSettingsList" class="settings-list scale-down-ver-top">
          <li>
            <InputNumber
              labelName="Rows"
              :fontFamily="settingsFontFamily"
              :defaultValue="rows"
              :minValue="1"
              :maxValue="50"
              eventName="rows-change"
              @rows-change="onRowsChange"
            />
          </li>
          <li>
            <InputNumber
              labelName="Columns"
              :fontFamily="settingsFontFamily"
              :defaultValue="cols"
              :minValue="1"
              :maxValue="50"
              eventName="cols-change"
              @cols-change="onColsChange"
            />
          </li>
          <li>
            <InputNumber
              labelName="Mines"
              :fontFamily="settingsFontFamily"
              :defaultValue="mines"
              :minValue="minimumMines"
              :maxValue="maximumMines"
              eventName="mines-change"
              @mines-change="onMinesChange"
            />
          </li>
          <li>
            <InputNumber
              labelName="Cell Size"
              :fontFamily="settingsFontFamily"
              :defaultValue="cellSize"
              :minValue="10"
              :maxValue="40"
              eventName="cell-size-change"
              @cell-size-change="onCellSizeChange"
            />
          </li>
        </ul>
      </div>

      <div
        id="colorSettings"
        class="d-flex flex-column justify-content-start align-items-center"
      >
        <SettingsIcon
          imgType="color"
          targetID="colorSettingsList"
          @settingsIconClick="onSettingsIconClick"
        />
        <ul id="colorSettingsList" class="settings-list scale-down-ver-top">
          <li>
            <InputColor
              labelName="Default"
              :fontFamily="settingsFontFamily"
              :defaultValue="defaultColor"
              eventName="def-color-change"
              @def-color-change="onDefColorChange"
            />
          </li>
          <li>
            <InputColor
              labelName="Revealed"
              :fontFamily="settingsFontFamily"
              :defaultValue="revealedColor"
              eventName="rev-color-change"
              @rev-color-change="onRevColorChange"
            />
          </li>
          <li>
            <InputColor
              labelName="Marked"
              :fontFamily="settingsFontFamily"
              :defaultValue="markedColor"
              eventName="mark-color-change"
              @mark-color-change="onMarkColorChange"
            />
          </li>
          <li>
            <InputColor
              labelName="X-Lost"
              :fontFamily="settingsFontFamily"
              :defaultValue="bombLostColor"
              eventName="bomb-lost-color-change"
              @bomb-lost-color-change="onBombLostColorChange"
            />
          </li>
          <li>
            <InputColor
              labelName="X-Won"
              :fontFamily="settingsFontFamily"
              :defaultValue="bombWonColor"
              eventName="bomb-won-color-change"
              @bomb-won-color-change="onBombWonColorChange"
            />
          </li>
          <li>
            <InputColor
              labelName="Numbers"
              :fontFamily="settingsFontFamily"
              :defaultValue="minesNumberColor"
              eventName="mines-number-color-change"
              @mines-number-color-change="onMinesNumberColorChange"
            />
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>

<script>
import Cell from "./components/Cell.vue";
import NewGame from "./components/NewGame.vue";
import InputNumber from "./components/InputNumber.vue";
import InputColor from "./components/InputColor.vue";
import InputFont from "./components/InputFont.vue";
import SettingsIcon from "./components/SettingsIcon/SettingsIcon.vue";
import Timer from "./components/Timer.vue";
import startNewGame from "./assets/js/tableGenerator";

export default {
  name: "Table",
  components: {
    Cell,
    InputNumber,
    InputColor,
    InputFont,
    SettingsIcon,
    Timer,
    NewGame,
  },
  data() {
    return {
      cellsRowFormatArray: Array,
      minesCounter: Number,
      rows: 10,
      cols: 10,
      mines: 20,
      cellSize: 25,
      selectElementsUpdator: 0,
      defaultColor: "#ff7f50",
      revealedColor: "#9acd32",
      markedColor: "#914d03",
      bombLostColor: "#ff0000",
      bombWonColor: "#00ffff",
      minesNumberColor: "#944a04",
      infoFontFamily: "Baloo",
      tableFontFamily: "Baloo",
      settingsFontFamily: "Baloo",
      isGameRunning: false,
      isGameOver: false,
      resetTimer: false,
      tableDiv: Object,
      timer: Object,
    };
  },
  watch: {
    rows() {
      this.mines = this.minimumMines;
    },
    cols() {
      this.mines = this.minimumMines;
    },
    isGameRunning(val) {
      if (val) {
        this.timer.classList.add("running");
      }
    },
  },
  computed: {
    didPlayerWin: function () {
      var logArray = [0];
      this.cellsRowFormatArray.forEach((rowObj) => {
        rowObj.row.forEach((cell) => {
          if (!cell.isRevealed && !cell.isMine) {
            logArray.push(1);
          }
        });
      });
      var logResult = this.sumArrayElements(logArray);
      return logResult == 0 ? true : false;
    },
    bombColor: function () {
      if (this.didPlayerWin) return this.bombWonColor;
      else return this.bombLostColor;
    },
    marksCounter: function () {
      var counter = 0;
      this.cellsRowFormatArray.forEach((rowObj) => {
        rowObj.row.forEach((cell) => {
          if (cell.isMarked) counter++;
        });
      });
      return counter;
    },
    maximumMines: function () {
      return this.rows * this.cols - 1;
    },
    minimumMines: function () {
      return Math.ceil(this.maximumMines / 5);
    },
    marksCounterLabel: function () {
      if (!this.isGameOver) return "Marked Cells :";
      else return "Wrong Marks :";
    },

    // Styles

    infoStyle: function () {
      return {
        "font-family": `${this.infoFontFamily}`,
      };
    },
    tableStyle: function () {
      return {
        display: "inline-block",
        width: `${
          (this.cellSize + 4) * this.cellsRowFormatArray[0].row.length - 2
        }px`,
        "font-family": `${this.tableFontFamily}`,
      };
    },
    settingsStyle: function () {
      return {
        "font-family": `${this.settingsFontFamily}`,
      };
    },
  },
  methods: {
    // Utility Methods

    preventDefaultEvents(e) {
      e = e || window.event;
      e.preventDefault();
    },

    sumArrayElements(array) {
      var reducer = (previousValue, currentValue) =>
        previousValue + currentValue;
      var sum = array.reduce(reducer);
      return sum;
    },
    checkArraysEquality(first, second) {
      var duplicationFounderArray = [0];
      var logSum = 0;
      var loopRange = Math.max(first.length, second.length);
      for (let i = 0; i < loopRange; i++) {
        if (first[i] != second[i]) {
          duplicationFounderArray.push(1);
        } else {
          duplicationFounderArray.push(0);
        }
      }

      logSum = this.sumArrayElements(duplicationFounderArray);
      var isEqual = logSum == 0 ? true : false;
      return isEqual;
    },

    // Main Functionality

    // Adjusts table width to fit in window
    tableWidthUpdator() {
      if (
        this.tableDiv.offsetWidth > window.innerWidth * 0.6 &&
        this.cellSize > 10
      ) {
        this.cellSize--;
      }
      if (
        this.tableDiv.offsetWidth < window.innerWidth * 0.3 &&
        this.cellSize < 40
      ) {
        this.cellSize++;
      }
    },

    toggleMarker(cell) {
      if (cell.isRevealed) {
      } else {
        cell.isMarked = !cell.isMarked;
      }
    },
    findMines(clickedCell) {
      if (clickedCell.isRevealed) {
      } else {
        if (clickedCell.isMarked) {
        } else {
          clickedCell.isRevealed = true;
          if (clickedCell.isMine) {
            this.gameOver();
            console.log("game over");
          } else {
            clickedCell.visibState = "visible";
            if (this.didPlayerWin) {
              console.log(`You Won !!!`);
              this.gameOver();
            } else if (clickedCell.minesAround == 0) {
              clickedCell.neighborCells.forEach((neighbor) => {
                this.cellsRowFormatArray.forEach((rowObj) => {
                  rowObj.row.forEach((cell) => {
                    if (this.checkArraysEquality(neighbor, cell.address)) {
                      this.findMines(cell);
                    }
                  });
                });
              });
            }
          }
        }
      }
    },
    gameOver() {
      this.cellsRowFormatArray.forEach((rowObj) => {
        rowObj.row.forEach((cell) => {
          if (cell.isMine) {
            cell.isMarked = false;
            cell.isRevealed = true;
            cell.visibState = "visible";
          }
        });
      });
      this.isGameRunning = false;
      this.isGameOver = true;
      this.timer.classList.remove("running");
      this.didPlayerWin
        ? this.timer.classList.add("won")
        : this.timer.classList.add("lost");
    },

    // Event Handlers

    onLeftClick(data) {
      if (!this.isGameOver) {
        if (!this.isGameRunning) {
          this.resetTimer = false;
          this.isGameRunning = true;
        }
        this.findMines(data);
      }
    },
    onRightClick(data) {
      if (!this.isGameOver) this.toggleMarker(data);
    },
    onNewGame(array, minesN) {
      this.resetTimer = true;
      this.isGameOver = false;
      this.isGameRunning = false;
      this.cellsRowFormatArray = array;
      this.minesCounter = minesN;
      this.timer.classList.remove("running", "won", "lost");
    },
    onRowsChange(data) {
      this.rows = data;
    },
    onColsChange(data) {
      this.cols = data;
    },
    onMinesChange(data) {
      this.mines = data;
    },
    onCellSizeChange(size) {
      this.cellSize = size;
    },
    onDefColorChange(color) {
      this.defaultColor = `${color}`;
    },
    onRevColorChange(color) {
      this.revealedColor = `${color}`;
    },
    onMarkColorChange(color) {
      this.markedColor = `${color}`;
    },
    onBombLostColorChange(color) {
      this.bombLostColor = `${color}`;
    },
    onBombWonColorChange(color) {
      this.bombWonColor = `${color}`;
    },
    onMinesNumberColorChange(color) {
      this.minesNumberColor = `${color}`;
    },
    onInfoFontChange(font) {
      this.infoFontFamily = `${font}`;
      this.selectElementsUpdator++;
    },
    onTableFontChange(font) {
      this.tableFontFamily = `${font}`;
      this.selectElementsUpdator++;
    },
    onSettingsFontChange(font) {
      this.settingsFontFamily = `${font}`;
      this.selectElementsUpdator++;
    },
    onSettingsIconClick(target, image) {
      var targetClassList = document.getElementById(target).classList;
      var imageClassList = document.getElementById(image).classList;

      targetClassList.toggle("scale-down-ver-top");
      targetClassList.toggle("scale-up-ver-top");
      imageClassList.toggle("rotate-center");
      imageClassList.toggle("reverse-rotate-center");
    },
  },
  created() {
    window.addEventListener("resize", this.tableWidthUpdator);
    try {
      this.cellsRowFormatArray = startNewGame(this.rows, this.cols, this.mines);
      this.minesCounter = this.mines;
    } catch (error) {
      console.log(error.message);
    }
  },
  mounted() {
    this.tableDiv = document.querySelector("#tableDiv");
    this.timer = document.querySelector(".timer");
  },
  updated() {
    this.tableWidthUpdator();
  },
};
</script>

<style scoped>
td {
  padding: 1px;
}

hr {
  margin: 10px;
}

/* Classes */

.info {
  width: 56%;
  padding: 0.25% 2%;
  margin: auto;
  border-radius: 15px;
}

.cell {
  vertical-align: middle;
}

.settings {
  justify-content: space-around;
}

/* ID Tags */

#accountDiv,
#recordDiv {
  width: 10vw;
}

#tableDiv {
  max-width: max-content;
  margin: 20px;
}

#fontSettings,
#numberSettings,
#colorSettings {
  min-width: 233px;
  margin: 45px 10px 0 10px;
}

@media (min-width: 576px) {
  .settings {
    flex-direction: row !important;
  }
}

@media (min-width: 576px) and (max-width: 768px) {
  .settings {
    width: 70vw;
  }

  #fontSettings,
  #numberSettings,
  #colorSettings {
    min-width: 114px;
  }
}

@media (min-width: 768px) {
  .info {
    flex-direction: row !important;
    justify-content: space-between !important;
  }

  #fontSettingsList li {
    position: relative;
    right: 43px;
  }
}
</style>
