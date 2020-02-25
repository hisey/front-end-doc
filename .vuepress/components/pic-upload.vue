<template>
  <div class="upload-box">
    <div class="avatar-box" :style="avatarBoxStyle">
      <input type="file" class="input-file" :style="commonStyle" :name="name" @mouseover="handleShowCover()" :ref="`avatarInput${name}`" @change="changeImage($event)" accept="image/gif, image/jpeg, image/jpg, image/png" />
      <img v-if="value" :src="value" alt :style="commonStyle" />
      <img v-else-if="defaultImg!=''" :src="defaultImg" alt :style="commonStyle" />
      <div class="add-box" v-else :style="commonStyle">
        <i v-if="isLoading" class="el-icon-loading"></i>
        <i v-if="!isLoading" class="el-icon-plus"></i>
      </div>
      <div @mouseleave="isShowCover=false" class="cover-box" :style="commonStyle" v-if="isShowCover">
        <div @click="handleInput" class="cover-plus" :style="commonStyle">
          <i class="el-icon-plus plus"></i>
        </div>
        <i v-if="allowDelete" class="el-icon-close close" @click="handleRemove"></i>
      </div>
    </div>
    <div class="tip">
      <p v-html="tip"></p>
      <el-popover placement="bottom" title="图片范例" width="400" trigger="click">
        <img :src="standardImgUrl" alt />
        <span v-if="standardImgUrl!=''" slot="reference" class="pic-example-btn">图片范例>></span>
      </el-popover>
    </div>
    <el-dialog title="裁剪图片" :visible.sync="visible" width="750px" :append-to-body="true">
      <div class="cropper-box">
        <vue-cropper ref="cropper" :guides="true" :view-mode="0" drag-mode="move" :aspectRatio="autoCropWidth/autoCropHeight" :auto-crop-area="0.7" :min-container-width="250" :min-container-height="180" :background="true" :rotatable="true" :src="cropedImg" alt="Source Image" :img-style="{ 'width': '400px', 'height': '300px' }" :cropmove="changeCrop"></vue-cropper>
        <div class="clearfix icon-box">
          <i @click="$refs.cropper.relativeZoom(0.1)" class="el-icon-circle-plus-outline icon-plus icon f-l"></i>
          <i @click="$refs.cropper.relativeZoom(-0.1)" class="el-icon-remove-outline icon-outline icon f-l"></i>
          <i @click="$refs.cropper.rotate(-90)" class="el-icon-refresh-left icon f-l"></i>
        </div>
      </div>
      <span slot="footer">
        <el-button @click=" visible= false">取 消</el-button>
        <el-button type="primary" @click="handleCropper">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
import VueCropper from "vue-cropperjs";
import "cropperjs/dist/cropper.css";
export default {
  name: "upload",
  components: {
    VueCropper
  },
  data() {
    return {
      expVisible: false,
      avatar: "",
      isLoading: false,
      cropedImg: "",
      visible: false,
      isShowCover: false
    };
  },
  component: {
    VueCropper
  },
  computed: {
    commonStyle() {
      return {
        width: this.imgWidth,
        height: this.imgHeight,
        borderRadius: `${this.round ? "50%" : "0"}`
      };
    },
    avatarBoxStyle() {
      return {
        ...this.commonStyle,
        borderWidth: "1px",
        borderColor: this.value || this.defaultImg ? "#efefef" : "#999",
        borderStyle: this.value || this.defaultImg ? "solid" : "dashed"
      };
    }
  },
  props: {
    value: String,
    action: {
      type: String,
      default: ""
    },
    defaultImg: {
      type: String,
      default: ""
    },
    allowDelete: {
      type: Boolean,
      default: true
    },
    standardImgUrl: {
      type: [String, Number],
      default: ""
    },
    imgUrl: {
      type: [String, Number],
      default: ""
    },
    imgWidth: {
      type: [String, Number],
      default: ""
    },
    imgHeight: {
      type: [String, Number],
      default: ""
    },
    tip: {
      type: [String, Number],
      default: ""
    },
    name: {
      type: [String, Number],
      default: ""
    },
    round: {
      type: Boolean,
      default: false
    },
    autoCropHeight: {
      type: [String, Number],
      default: 100
    },
    autoCropWidth: {
      type: [String, Number],
      default: 100
    },
    fixedNumber: {
      type: [Array],
      default: () => {
        return ["16:9"];
      }
    },
    maxSize: {
      type: Number,
      default: 8
    },
    isCropper: {
      type: Boolean,
      default: false
    }
  },
  watch: {
    value(val) {
      if (!val) {
        this.cropedImg = "";
      }
    },
    visible(val) {
      if (!val) {
        this.clearValue();
      }
    }
  },
  methods: {
    changeCrop(obj) {
      console.log(obj);
    },
    handleInput() {
      this.$refs[`avatarInput${this.name}`].click();
    },
    clearValue() {
      this.$refs[`avatarInput${this.name}`].value = "";
    },
    changeImage: function(e) {
      let file = e.target.files[0];
      if (file) {
        const isLt8M = file.size / 1024 / 1024 < this.maxSize;
        if (!isLt8M) {
          this.$message.error(`上传的图片大小不能超过 ${this.maxSize}MB!`);
          return false;
        }
        // 文件对象
        if (this.isCropper) {
          this.visible = true;
          if (!file.type.includes("image/")) {
            this.$message.warning("请选择图片文件");
            return;
          }
          if (typeof FileReader === "function") {
            const reader = new FileReader();
            reader.onload = event => {
              this.cropedImg = event.target.result;
              this.$refs.cropper.replace(event.target.result);
            };
            reader.readAsDataURL(file);
          } else {
            this.handleUpload(file);
          }
        } else {
          this.handleUpload(file);
        }
      }
    },
    handleUpload(file) {
      this.isLoading = true;
      let formData = new FormData();
      formData.append("file", file);
      axios
        .post(this.action, formData, {
          "Content-Type": "multipart/form-data"
        })
        .then(res => {
          this.isLoading = false;
          if (res.status == 200 && res.data) {
            let data = res.data;
            this.avatar = data.url;
            this.$emit("input", data.url);
            this.$emit("uploadSuccess", data, this.name);
          }
        });
    },
    handleCropper() {
      this.visible = false;
      let data = this.$refs.cropper
        .getCroppedCanvas()
        .toDataURL("image/jpeg", 0.7);
      let blob = this.dataURLtoBlob(data);
      this.handleUpload(blob);
    },
    //base64 to blob
    dataURLtoBlob(dataurl) {
      var arr = dataurl.split(","),
        mime = arr[0].match(/:(.*?);/)[1],
        bstr = atob(arr[1]),
        n = bstr.length,
        u8arr = new Uint8Array(n);
      while (n--) {
        u8arr[n] = bstr.charCodeAt(n);
      }
      return new Blob([u8arr], { type: mime });
    },
    handleRemove() {
      this.isShowCover = false;
      this.clearValue();
      this.$emit("input", "");
      this.$emit("onRemove", this.name);
    },
    handleShowCover() {
      if (this.value || this.defaultImg != "") {
        this.isShowCover = true;
      } else {
        this.isShowCover = false;
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.upload-box {
  .avatar-box {
    cursor: pointer;
    position: relative;
    text-align: center;
    border: 1px dashed #999;
    background-color: #f6f8fb;
    font-size: 20px;
    width: 100%;
    .input-file {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      opacity: 0;
      cursor: pointer;
      z-index: 2;
    }
    .text {
      padding-top: 10px;
      color: lightblue;
    }
  }
  .tip {
    margin-top: 5px;
    color: #999;
    line-height: 18px;
    p {
      font-size: 12px;
    }
  }
  .add-box {
    display: flex;
    justify-content: center;
    align-items: center;
    .el-icon-plus {
      color: #98a9be;
    }
    i {
      font-size: 25px;
    }
  }
}
.cover-box {
  z-index: 3;
  position: absolute;
  top: 0;
  background-color: rgba(51, 51, 51, 0.5);
  .close {
    position: absolute;
    right: 0;
    top: 0;
  }
  .upload-text {
    color: #fff;
    font-size: 14px;
  }
  .cover-plus {
    display: flex;
    justify-content: center;
    align-items: center;
    .plus {
      font-size: 25px;
      color: #fff;
    }
  }
}
.cropper-box {
  width: 700px;
  height: 300px;
  .icon-box {
    margin-top: 10px;
    margin-bottom: 20px;
    .icon {
      font-size: 22px;
      color: #409eff;
      display: inline-block;
      margin-right: 10px;
      cursor: pointer;
    }
  }
}
.pic-example-btn {
  color: #409eff;
  cursor: pointer;
}
</style>
