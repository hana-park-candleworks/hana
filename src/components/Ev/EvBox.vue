<template>
    <div class="box-wrapper" :style="noTitleStyle">
<!--        모바일 버전 -->
        <h5 v-if="title && isMobile " :class="{divider:isDivided}" class="text-main-400">
            {{title}}
            <span v-show="subTitle" class="sub-header">{{subTitle}}</span>
        </h5>
<!--        웹 버전 -->
        <h5 v-if="title && !isMobile">
            <i class="fa fa-quote-left double-quote" v-show="quoted"></i>
            {{title}}
            <i class="fa fa-quote-right double-quote" v-show="quoted"></i>
            <span v-show="subTitle" class="sub-header">{{subTitle}}</span>
        </h5>
<!--        이름이 header 인 slot-->
        <slot name="header"></slot>
        <div class="memo">
            <div ref="container" :class="{content:true, isFixed:isExpendable, 'content-box':true}" :style="{height:mutateHeight}" v-show="isToggle" >
<!--                이름이 default 인 slot. 따로 slot 이름을 지정하지 않으면 여기에 contant 가 들어 간다. -->
                <slot></slot>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'EvBox',
        data(){
            return {
                mutateToggle : true,
                mutateHeight : ''
            }
        },
        props : {
            title : String,
            subTitle : String,
            quoted : Boolean,
            expendableHeight : {
                type : String,
                default : 'auto'
            },
            divided : Boolean
        },
        methods : {
            showContainer(){
                this.mutateHeight = 'auto';
            }
        },
        computed : {
            noTitleStyle(){
                if(!this.title)
                    return {
                        'margin-top' : '0px',
                        'padding-top': '0px'
                    }
            },
            isDivided(){
                return this.divided;
            },
            isExpendable(){
                return this.mutateHeight.length > 0 && this.mutateHeight !== 'auto';
            },
            isToggle(){
                return this.mutateToggle;
            }
        },
        created(){
            this.mutateHeight = this.expendableHeight;
        }
    }
</script>
<style lang="scss" scoped>
    @import "../../sass/vars";
    .sub-header{
        font-size: 14px;
        padding-left: 10px;
    }
    .mobile-border{
        padding: 0 10px !important;
        margin-top: 0px !important;
        margin-bottom: 4px;

        .divider{
            padding-left: 10px;
            background-color: #eee;
            margin-bottom: 0px !important;
            padding-bottom: 6px;
            padding-top: 6px;
            font-size: 16px;
        }
        h5{
            font-weight: 600;
            font-size: 18px !important;
            margin-bottom: 0.2rem;
            @media screen and (max-width: $--sm) {
                padding: 10px 0px;
                border: none;
                margin-bottom: 10px;
            }
        }
        .memo {
            border-right: 0px !important;
            border-left: 0px !important;
            border-radius: 0px !important;

        }
    }

    .box-wrapper {
        position : relative;
        overflow : visible;
        margin-top: 40px;
        margin-bottom : 20px;
        @media print{
            margin-top: 10px;
            margin-bottom : 10px;
        }
        background-color: #FFFFFF;
        @media screen and (max-width: $--sm) {
            padding: 0px !important;
            margin-top: 0px !important;
            margin-bottom: 4px;
        }
        > h5{
            padding-bottom: 5px;
            border-bottom: 2px solid #333333;
        }
        @media screen and (max-width: $--sm) {
            padding: 0;
            padding-top: 10px;
            padding-bottom : 10px;
        }
        .memo{
            position: relative;
            min-height : 60px;
            .content{

                @media screen and (max-width: $--sm) {
                    padding: 0px;
                }
                height: 0px;
                transition: height 1s;
            }
            .isFixed{
                overflow: scroll;
                border: 1px solid #e1e2e3;
                padding: 10px;
            }
            .expendable-handler{
                transition: all 0.5s ease-out;
                cursor: pointer;
                font-size: 18px;
                text-align: center;
                width: 100%;
                background: linear-gradient(to bottom, transparent, $--border-color-base);
                position: absolute;
                bottom: 0px;
                left: 0px;
                border-radius: 4px;
                height: 100%;

                color: transparent;
            }
            .expendable-handler:hover{
                color: $--color-primary;
            }
        }
    }

</style>
