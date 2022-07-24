<template>
    <div class="screen-container">
        <header class="screen-header">
            <div class="line">
                <div class="left-line"></div>
                <div class="middle-line"></div>
                <div class="right-line"></div>
            </div>
            <div class="title"></div>
        </header>
        <div class="screen-body">
            <div class="screen-left">
                <div class="screen-left-top border-photo">
                    <div class="real-time">
                        <span>
                            实时统计
                        </span>
                    </div>
                </div>
                <div class="screen-left-middle border-photo">

                </div>
                <div class="screen-left-bottom border-photo">

                </div>
            </div>
            <div class="screen-middle">
                <div class="screen-middle-top">
                    <SingelMap class="singel-map" />
                </div>
                <div class="screen-middle-bottom border-photo">

                </div>
            </div>
            <div class="screen-right">
                <div class="screen-right-top border-photo">

                </div>
                <div class="screen-right-middle border-photo">

                </div>
                <div class="screen-right-bottom border-photo">

                </div>
            </div>
        </div>
    </div>
</template>

<script>
import SingelMap from '@/components/SingelMap'

export default {
    name: 'ScreenPage',
    components: {
        SingelMap,
    }
}
</script>

<style lang="less" scoped>
.screen-container {
    height: 100%;
    overflow: hidden;
    background-image: url('../../public/static/img/map_bg.png');
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;

    .screen-header {
        margin-top: 10px;
        width: 100%;
        height: 64px;
        position: relative;

        .title {
            height: 32px;
            width: 400px;
            border-left: 4px solid #0089FF;
            border-right: 4px solid #0089FF;
            background-image: url('../../public/static/img/title.png');
            background-size: 90%;
            background-position: center center;
            background-repeat: no-repeat;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            z-index: 2;
        }

        .line {
            width: 100%;
            height: 32px;
            display: flex;
            flex-direction: row;

            .left-line {
                height: 32px;
                width: 565px;
                border-bottom: 2px solid #0089FF;
                z-index: 1;
            }

            .middle-line {
                height: 32px;
                flex: 1;
            }

            .right-line {
                height: 32px;
                width: 565px;
                border-bottom: 2px solid #0089FF;
                z-index: 1;
            }

        }
    }

    .screen-body {
        height: 689.2px;
        display: flex;

        .border-photo {
            border: 1px solid #20558B;
            background-image: url('../../public/static/img/bj-1.png'),
                url('../../public/static/img/bj-2.png'),
                url('../../public/static/img/bj-3.png'),
                url('../../public/static/img/bj-4.png'), ;
            background-position: left top, right top, right bottom, left bottom;
            background-size: 5%, 5%, 5%, 5%;
            background-repeat: no-repeat, no-repeat, no-repeat, no-repeat;
        }

        .screen-left {
            height: 100%;
            width: 380px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;

            .screen-left-top {
                width: 360px;
                height: 300px;
                margin: 8px;
                margin-left: 10px;
                position: relative;

                .real-time {
                    position: absolute;
                    background-image: url('../../public/static/img/info-title.png');
                    background-size: 90%;
                    background-position: center;
                    background-repeat: no-repeat;
                    color: rgb(255, 255, 255);
                    font-size: 14px;
                    font-weight: 600;
                    line-height: 43px;
                    left: 32%;
                    top: -7%;

                    span {
                        padding: 10px 40px;
                    }
                }
            }

            .screen-left-middle {
                width: 360px;
                height: 170px;
                margin: 8px;
                margin-left: 10px;
            }

            .screen-left-bottom {
                width: 360px;
                height: 170px;
                margin: 8px;
                margin-left: 10px;
            }
        }

        .screen-middle {
            height: 100%;
            flex: 1;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;

            .screen-middle-top {
                height: 500px;
                width: 766px;
                margin: 8px;
            }

            .screen-middle-bottom {
                height: 173px;
                width: 766px;
                background-size: 2.6%;
                margin: 8px;
            }
        }

        .screen-right {
            height: 100%;
            width: 380px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;

            .screen-right-top {
                width: 360px;
                height: 215px;
                margin: 8px;
                margin-right: 30px;
            }

            .screen-right-middle {
                width: 360px;
                height: 215px;
                margin: 8px;
                margin-right: 30px;
            }

            .screen-right-bottom {
                width: 360px;
                height: 215px;
                margin: 8px;
                margin-right: 30px;
            }
        }
    }
}
</style>