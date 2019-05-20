# 常用命令行

## Git 基本操作

### 获取与创建项目命令

#### git init

用 git init 在目录中创建新的 Git 仓库。 你可以在任何时候、 任何目录中这么做， 完全是本地化的。 
在目录中执行 git init, 就可以创建一个 Git 仓库了。 比如我们创建 runoob 项目： 

```bash
$ mkdir runoob
$ cd runoob/
$ git init
Initialized empty Git repository in /Users/tianqixin/www/runoob/.git/
# 在 /www/runoob/.git/ 目录初始化空 Git 仓库完毕。
```

#### git clone

使用 git clone 拷贝一个 Git 仓库到本地， 让自己能够查看该项目， 或者进行修改。 
如果你需要与他人合作一个项目， 或者想要复制一个项目， 看看代码， 你就可以克隆那个项目。 执行命令： 

```bash
 $ git clone git@github.com:schacon/simplegit.git
Cloning into 'simplegit'...
remote: Counting objects: 13, done.
remote: Total 13 (delta 0), reused 0 (delta 0), pack-reused 13
Receiving objects: 100% (13/13), done.
Resolving deltas: 100% (2/2), done.
Checking connectivity... done.
```

### 基本快照

#### git add

git add 命令可将该文件添加到缓存， 如我们添加以下两个文件： 

```nash
$ touch README
$ touch hello.php
$ ls
README        hello.php
$ git status -s
?? README
?? hello.php
$ 
```

git status 命令用于查看项目的当前状态。 
接下来我们执行 git add 命令来添加文件： 

```bash
$ git add README hello.php 
```

现在我们再执行 git status, 就可以看到这两个文件已经加上去了。 

```bash
$ git status -s
A  README
A  hello.php
$ 
```

新项目中， 添加所有文件很普遍， 我们可以使用 git add . 命令来添加当前项目的所有文件。 
现在我们修改 README 文件： 

```bash
$ vim README
```

在 README 添加以下内容： # Runoob Git 测试， 然后保存退出。 
再执行一下 git status: 

```bash
$ git status -s
AM README
A  hello.php
```

"AM" 状态的意思是， 这个文件在我们将它添加到缓存之后又有改动。 改动后我们再执行 git add 命令将其添加到缓存中： 

```bash
$ git add .
$ git status -s
A  README
A  hello.php
```

当你要将你的修改包含在即将提交的快照里的时候， 需要执行 git add. 

#### git status

git status 以查看在你上次提交之后是否有修改。 

我演示该命令的时候加了 -s 参数， 以获得简短的结果输出。 如果没加该参数会详细输出内容： 

```bash
$ git status
On branch master

Initial commit

Changes to be committed:
  (use "git rm --cached <file>..." to unstage)

    new file:   README
    new file:   hello.php
```

#### git diff

执行 git diff 来查看执行 git status 的结果的详细信息。 
git diff 命令显示已写入缓存与已修改但尚未写入缓存的改动的区别。 git diff 有两个主要的应用场景。 

##### 尚未缓存的改动： git diff

##### 查看已缓存的改动： git diff --cached

##### 查看已缓存的与未缓存的所有改动： git diff HEAD

##### 显示摘要而非整个 diff: git diff --stat

在 hello.php 文件中输入以下内容： 

```php
<?php
echo '菜鸟教程：www.runoob.com';
?>
```

```bash
$ git status -s
A  README
AM hello.php
$ git diff
diff --git a/hello.php b/hello.php
index e69de29..69b5711 100644
--- a/hello.php
+++ b/hello.php
@@ -0,0 +1,3 @@
+<?php
+echo '菜鸟教程：www.runoob.com';
+?>
```

git status 显示你上次提交更新后的更改或者写入缓存的改动， 而 git diff 一行一行地显示这些改动具体是啥。 
接下来我们来查看下 git diff --cached 的执行效果： 

```bash
$ git add hello.php 
$ git status -s
A  README
A  hello.php
$ git diff --cached
diff --git a/README b/README
new file mode 100644
index 0000000..8f87495
--- /dev/null
+++ b/README
@@ -0,0 +1 @@
+# Runoob Git 测试
diff --git a/hello.php b/hello.php
new file mode 100644
index 0000000..69b5711
--- /dev/null
+++ b/hello.php
@@ -0,0 +1,3 @@
+<?php
+echo '菜鸟教程：www.runoob.com';
+?>
```

#### git commit

使用 git add 命令将想要快照的内容写入缓存区， 而执行 git commit 将缓存区内容添加到仓库中。 
Git 为你的每一个提交都记录你的名字与电子邮箱地址， 所以第一步需要配置用户名和邮箱地址。 

```bash
$ git config --global user.name 'runoob'
$ git config --global user.email test@runoob.com
```

接下来我们写入缓存， 并提交对 hello.php 的所有改动。 在首个例子中， 我们使用 -m 选项以在命令行中提供提交注释。 

```bash
$ git add hello.php
$ git status -s
A  README
A  hello.php
$ git commit -m '第一次版本提交'
[master (root-commit) d32cf1f] 第一次版本提交
 2 files changed, 4 insertions(+)
 create mode 100644 README
 create mode 100644 hello.php
```

现在我们已经记录了快照。 如果我们再执行 git status:

```bash
$ git status
# On branch master
nothing to commit (working directory clean)
```

以上输出说明我们在最近一次提交之后， 没有做任何改动， 是一个“working directory clean: 干净的工作目录“。 
如果你没有设置 -m 选项， Git 会尝试为你打开一个编辑器以填写提交信息。 如果 Git 在你对它的配置中找不到相关信息， 默认会打开 vim. 屏幕会像这样： 

```vim
# Please enter the commit message for your changes. Lines starting
# with '#' will be ignored, and an empty message aborts the commit.
# On branch master
# Changes to be committed:
#   (use "git reset HEAD <file>..." to unstage)
#
# modified:   hello.php
#
~
~
".git/COMMIT_EDITMSG" 9L, 257C
```

如果你觉得 git add 提交缓存的流程太过繁琐， Git 也允许你用 -a 选项跳过这一步。 命令格式如下： 

```bash
git commit -a
```

我们先修改 hello.php 文件为以下内容： 

```php
<?php
echo '菜鸟教程：www.runoob.com';
echo '菜鸟教程：www.runoob.com';
?>
```

再执行以下命令： 

```bash
git commit -am '修改 hello.php 文件'
[master 71ee2cb] 修改 hello.php 文件
 1 file changed, 1 insertion(+)
```

#### git reset HEAD

git reset HEAD 命令用于取消已缓存的内容。 
我们先改动文件 README 文件， 内容如下： 

```README
# Runoob Git 测试 
```

hello.php 文件修改为： 

```php
<?php
echo '菜鸟教程：www.runoob.com';
echo '菜鸟教程：www.runoob.com';
echo '菜鸟教程：www.runoob.com';
?>
```

现在两个文件修改后， 都提交到了缓存区， 我们现在要取消其中一个的缓存， 操作如下： 

```bash
$ git status -s
 M README
 M hello.php
$ git add .
$ git status -s
M  README
M  hello.php
$ git reset HEAD hello.php 
Unstaged changes after reset:
M    hello.php
$ git status -s
M  README
 M hello.php
```

现在你执行 git commit, 只会将 README 文件的改动提交， 而 hello.php 是没有的。 

```bash
$ git commit -m '修改'
[master f50cfda] 修改
 1 file changed, 1 insertion(+)
$ git status -s
 M hello.php
```

可以看到 hello.php 文件的修改并未提交。 
这时我们可以使用以下命令将 hello.php 的修改提交： 

```bash
$ git commit -am '修改 hello.php 文件'
[master 760f74d] 修改 hello.php 文件
 1 file changed, 1 insertion(+)
$ git status
On branch master
nothing to commit, working directory clean
```

简而言之， 执行 git reset HEAD 以取消之前 git add 添加， 但不希望包含在下一提交快照中的缓存。 

#### git rm

如果只是简单地从工作目录中手工删除文件， 运行 git status 时就会在 Changes not staged for commit 的提示。 
要从 Git 中移除某个文件， 就必须要从已跟踪文件清单中移除， 然后提交。 可以用以下命令完成此项工作

```bash
git rm <file>
```

如果删除之前修改过并且已经放到暂存区域的话， 则必须要用强制删除选项 -f

```nash
git rm -f <file>
```

如果把文件从暂存区域移除， 但仍然希望保留在当前工作目录中， 换句话说， 仅是从跟踪清单中删除， 使用 --cached 选项即可

```bash
git rm --cached <file>
```

如我们删除 hello.php文件： 

```bash
$ git rm hello.php 
rm 'hello.php'
$ ls
README
```

不从工作区中删除文件： 

```bash
$ git rm --cached README 
rm 'README'
$ ls
README
```

可以递归删除， 即如果后面跟的是一个目录做为参数， 则会递归删除整个目录中的所有子目录和文件： 

```bash
git rm –r * 
```

进入某个目录中， 执行此语句， 会删除该目录下的所有文件和子目录。 

#### git mv

git mv 命令用于移动或重命名一个文件、 目录、 软连接。 

我们先把刚移除的 README 添加回来： 

```bash
$ git add README 
```

然后对其重名：

```bash
$ git mv README  README.md
$ ls
README.md
```
## Git 分支管理
创建分支命令：
```bash
git branch (branchname)
```
切换分支命令:
```bash
git checkout (branchname)
```
合并分支命令:
```bash
git merge 
```
你可以多次合并到统一分支， 也可以选择在合并之后直接删除被并入的分支。
开始前我们先创建一个测试目录：
```bash
$ mkdir gitdemo
$ cd gitdemo/
$ git init
Initialized empty Git repository...
$ touch README
$ git add README
$ git commit -m '第一次版本提交'
[master (root-commit) 3b58100] 第一次版本提交
 1 file changed, 0 insertions(+), 0 deletions(-)
 create mode 100644 README
```
列出分支基本命令：
```bash
git branch
```
没有参数时，git branch 会列出你在本地的分支。
如果我们要手动创建一个分支。执行 git branch (branchname) 即可。
```bash
$ git branch testing
$ git branch
* master
  testing
```
现在我们可以看到，有了一个新分支 testing。
当你以此方式在上次提交更新之后创建了新分支，如果后来又有更新提交， 然后又切换到了 testing 分支，Git 将还原你的工作目录到你创建分支时候的样子。
接下来我们将演示如何切换分支，我们用 git checkout (branch) 切换到我们要修改的分支。
```bash
$ ls
README
$ echo 'runoob.com' > test.txt
$ git add .
$ git commit -m 'add test.txt'
[master 3e92c19] add test.txt
 1 file changed, 1 insertion(+)
 create mode 100644 test.txt
$ ls
README        test.txt
$ git checkout testing
Switched to branch 'testing'
$ ls
README
```
当我们切换到 testing 分支的时候，我们添加的新文件 test.txt 被移除了。切换回 master 分支的时候，它们有重新出现了。
```bash
$ git checkout master
Switched to branch 'master'
$ ls
README        test.txt
```
我们也可以使用 git checkout -b (branchname) 命令来创建新分支并立即切换到该分支下，从而在该分支中操作。
```bash
$ git checkout -b newtest
Switched to a new branch 'newtest'
$ git rm test.txt 
rm 'test.txt'
$ ls
README
$ touch hello.php
$ git add .
$ git commit -am 'removed test.txt、add runoob.php'
[newtest c1501a2] removed test.txt、add runoob.php
 2 files changed, 1 deletion(-)
 create mode 100644 runoob.php
 delete mode 100644 test.txt
$ ls
README        runoob.php
$ git checkout master
Switched to branch 'master'
$ ls
README        test.txt
```
如你所见，我们创建了一个分支，在该分支的上移除了一些文件 test.txt，并添加了 runoob.php 文件，然后切换回我们的主分支，删除的 test.txt 文件又回来了，且新增加的 runoob.php 不存在主分支中。
使用分支将工作切分开来，从而让我们能够在不同开发环境中做事，并来回切换。

### 删除分支
删除分支命令：
```bash
git branch -d (branchname)
```
例如我们要删除 testing 分支：
```bash
$ git branch
* master
  testing
$ git branch -d testing
Deleted branch testing (was 85fc7e7).
$ git branch
* master
```
### 分支合并
一旦某分支有了独立内容，你终究会希望将它合并回到你的主分支。 你可以使用以下命令将任何分支合并到当前分支中去：
```bash
git merge
```
```bash
$ git branch
* master
  newtest
$ ls
README        test.txt
$ git merge newtest
Updating 3e92c19..c1501a2
Fast-forward
 runoob.php | 0
 test.txt   | 1 -
 2 files changed, 1 deletion(-)
 create mode 100644 runoob.php
 delete mode 100644 test.txt
$ ls
README        runoob.php
```
以上实例中我们将 newtest 分支合并到主分支去，test.txt 文件被删除。
合并完后就可以删除分支:
```bash
$ git branch -d newtest
Deleted branch newtest (was c1501a2).
```
删除后， 就只剩下 master 分支了：
```bash

$ git branch
* master
```
### 合并冲突
合并并不仅仅是简单的文件添加、移除的操作，Git 也会合并修改。
```bash
$ git branch
* master
$ cat runoob.php
```
首先，我们创建一个叫做 change_site 的分支，切换过去，我们将 runoob.php 内容改为:

```php
<?php
echo 'runoob';
?>
```
创建 change_site 分支：
```bash
$ git checkout -b change_site
Switched to a new branch 'change_site'
$ vim runoob.php
$ head -3 runoob.php
<?php
echo 'runoob';
?>
$ git commit -am 'changed the runoob.php'
[change_site 7774248] changed the runoob.php
 1 file changed, 3 insertions(+)
```
将修改的内容提交到 change_site 分支中。 现在，假如切换回 master 分支我们可以看内容恢复到我们修改前的(空文件，没有代码)，我们再次修改 runoob.php 文件。

```bash
$ git checkout master
Switched to branch 'master'
$ cat runoob.php
$ vim runoob.php    # 修改内容如下
$ cat runoob.php
<?php
echo 1;
?>
$ git diff
diff --git a/runoob.php b/runoob.php
index e69de29..ac60739 100644
--- a/runoob.php
+++ b/runoob.php
@@ -0,0 +1,3 @@
+<?php
+echo 1;
+?>
$ git commit -am '修改代码'
[master c68142b] 修改代码
 1 file changed, 3 insertions(+)
```
现在这些改变已经记录到我的 "master" 分支了。接下来我们将 "change_site" 分支合并过来。
```bash
$ git merge change_site
Auto-merging runoob.php
CONFLICT (content): Merge conflict in runoob.php
Automatic merge failed; fix conflicts and then commit the result.

$ cat runoob.php     # 代开文件，看到冲突内容
<?php
<<<<<<< HEAD
echo 1;
=======
echo 'runoob';
>>>>>>> change_site
?>
```
我们将前一个分支合并到 master 分支，一个合并冲突就出现了，接下来我们需要手动去修改它。
```bash
$ vim runoob.php 
$ cat runoob.php
<?php
echo 1;
echo 'runoob';
?>
$ git diff
diff --cc runoob.php
index ac60739,b63d7d7..0000000
--- a/runoob.php
+++ b/runoob.php
@@@ -1,3 -1,3 +1,4 @@@
  <?php
 +echo 1;
+ echo 'runoob';
  ?>
```
在 Git 中，我们可以用 git add 要告诉 Git 文件冲突已经解决
```bash
$ git status -s
UU runoob.php
$ git add runoob.php
$ git status -s
M  runoob.php
$ git commit
[master 88afe0e] Merge branch 'change_site'
```