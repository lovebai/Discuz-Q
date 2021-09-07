<?php
/**
 * @OA\Get(
 *     path="/apiv3/group.permission.list",
 *     summary="我的角色-我的权限",
 *     description="我的角色-我的权限",
 *     tags={"个人中心"},
 *     @OA\Parameter(ref="#/components/parameters/bear_token"),
 *     @OA\Response(
 *          response=200,
 *          description="返回更新结果",
 *          @OA\JsonContent(
 *              allOf={
 *                  @OA\Schema(ref="#/components/schemas/dzq_layout"),
 *                  @OA\Schema(@OA\Property(property="Data",type="object",
 *                      @OA\Property(property="myGroup",type="object",description = "我的角色",
 *                          @OA\Property(property="nickname",type="integer",description = "昵称"),
 *                          @OA\Property(property="avatar",type="string",description = "头像"),
 *                          @OA\Property(property="groupName",type="string",description = "角色名"),
 *                          @OA\Property(property="createdAt",type="string", format="datetime",default="2021-05-07T03:00:28.000000Z",description = "加入时间"),
 *                      ),
 *                      @OA\Property(property="myPermissons",type="object",description = "我的权限",
 *                          @OA\Property(property="general",type="object",description = "通用权限",
 *                              @OA\Property(property="thread.sticky",type="boolean",default="true",description = "置顶"),
 *                              @OA\Property(property="thread.favorite",type="boolean",default="true",description = "收藏帖子"),
 *                              @OA\Property(property="thread.likePosts",type="boolean",default="true",description = "点赞帖子"),
 *                              @OA\Property(property="user.view",type="boolean",default="true",description = "查看用户信息"),
 *                              @OA\Property(property="userFollow.create",type="boolean",default="true",description = "关注/取关用户"),
 *                              @OA\Property(property="dialog.create",type="boolean",default="true",description = "发布私信"),
 *                              @OA\Property(property="other.canInviteUserScale",type="boolean",default="true",description = "裂变推广(邀请加入)"),
 *                              @OA\Property(property="createThreadWithCaptcha",type="boolean",default="true",description = "发布帖子时需要验证码"),
 *                              @OA\Property(property="publishNeedBindPhone",type="boolean",default="true",description = "发布帖子时需要绑定手机"),
 *                              @OA\Property(property="cash.create",type="boolean",default="true",description = "申请提现"),
 *                              @OA\Property(property="order.create",type="boolean",default="true",description = "创建订单"),
 *                              @OA\Property(property="trade.pay.order",type="boolean",default="true",description = "支付订单"),
 *                          ),
 *                          @OA\Property(property="thread.insertImage",type="object",default="{}",description = "插入图片，key值表示内容分类ID"),
 *                          @OA\Property(property="thread.insertVideo",type="object",default="{}",description = "插入视频，key值表示内容分类ID"),
 *                          @OA\Property(property="thread.insertAudio",type="object",default="{}",description = "插入语音，key值表示内容分类ID"),
 *                          @OA\Property(property="thread.insertAttachment",type="object",default="{}",description = "插入附件，key值表示内容分类ID"),
 *                          @OA\Property(property="thread.insertGoods",type="object",default="{}",description = "插入商品，key值表示内容分类ID"),
 *                          @OA\Property(property="thread.insertPay",type="object",default="{}",description = "插入付费，key值表示内容分类ID"),
 *                          @OA\Property(property="thread.insertReward",type="object",default="{}",description = "插入悬赏，key值表示内容分类ID"),
 *                          @OA\Property(property="thread.insertRedPacket",type="object",default="{}",description = "插入红包，key值表示内容分类ID"),
 *                          @OA\Property(property="thread.insertPosition",type="object",default="{}",description = "插入位置，key值表示内容分类ID"),
 *                          @OA\Property(property="thread.allowAnonymous",type="object",default="{}",description = "允许匿名，key值表示内容分类ID"),
 *                          @OA\Property(property="thread.viewThreads",type="object",default="{}",description = "查看主题列表，key值表示内容分类ID"),
 *                          @OA\Property(property="thread.viewPosts",type="object",default="{}",description = "查看主题详情，key值表示内容分类ID"),
 *                          @OA\Property(property="thread.freeViewPosts",type="object",default="{}",description = "免费查看付费内容，key值表示内容分类ID"),
 *                          @OA\Property(property="thread.reply",type="object",default="{}",description = "回复主题，key值表示内容分类ID"),
 *                          @OA\Property(property="thread.essence",type="object",default="{}",description = "加精，key值表示内容分类ID"),
 *                          @OA\Property(property="thread.edit",type="object",default="{}",description = "编辑主题，key值表示内容分类ID"),
 *                          @OA\Property(property="thread.hide",type="object",default="{}",description = "删除主题，key值表示内容分类ID"),
 *                          @OA\Property(property="thread.hidePosts",type="object",default="{}",description = "删除回复，key值表示内容分类ID"),
 *                          @OA\Property(property="thread.editOwnThread",type="object",default="{}",description = "编辑自己的主题，key值表示内容分类ID"),
 *                          @OA\Property(property="thread.hideOwnThreadOrPost",type="object",default="{}",description = "删除自己的主题或回复，key值表示内容分类ID"),
 *                      ),
 *                  ))
 *          }))
 * )
 */
